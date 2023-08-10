const models = require('../models');
const { Op } = require('sequelize');

exports.index = (req, res) => {
    res.render('index');
};

exports.signup = (req, res) => {
    res.render('signup');
};

// 구조분해 할당 활용!
exports.post_signup = (req, res) => {
    const {userid, pw, name} = req.body
    models.User.create({
        userid,
        pw,
        name
    }).then(() => {
        res.send({ result: true })
    });
};

exports.signin = (req, res) => {
    res.render('signin');
};

exports.post_signin = (req, res) => {
    models.User.findOne(
        {where: {id: req.body.userid, pw: req.body.pw}}
    ).then((result) => {
        if ([result].length > 0) {
            res.send({ result: true, data: [result][0] });
        } else {
            res.send({ result: false, data: null });
        }
    })
};

exports.post_profile = (req, res) => {
    models.User.findOne(
        {where: {userid: req.body.userid}}
    ).then((result) => {
        if ([result].length > 0) {
            res.render('profile', { data: [result][0] });
        }
    })
};

exports.edit_profile = (req, res) => {
    models.User.update(
        {
        userid: req.body.userid,
        pw: req.body.pw,
        name: req.body.name,
        },
        {
            where: {id: req.body.id}
        }
    ).then(() => {
        res.send({ result: true })
    })
};

exports.delete_profile = (req, res) => {
    models.User.destroy({
        where: {id: req.body.id}
    }).then(() => {
        res.send({ result: true });
    })
};

exports.findall = (req, res) => {
    models.User.findAll({
        // attributes 원하는 컬럼 조회
        attributes: ['name', 'userid'],
        // Op.gt(초과)
        // Op.gte (이상)
        // Op.lt (미만)
        // Op.ne, or, in 등등 많음, 공식문서 참고 orderby, like, limit, offset 다 공식문서 참고해라
        where: { id: { [Op.gte]: 2 } }
    }).then((result) => {
        console.log('findAll', result);
        res.send(result);
    })
}
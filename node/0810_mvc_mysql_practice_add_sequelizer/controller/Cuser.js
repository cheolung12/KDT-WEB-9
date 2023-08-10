const models = require('../models');

exports.index = (req, res) => {
    res.render('index');
};

exports.signup = (req, res) => {
    res.render('signup');
};

exports.post_signup = (req, res) => {
    models.User.create({
        userid: req.body.userid,
        pw: req.body.pw,
        name: req.body.name,
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

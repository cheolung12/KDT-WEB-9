const { User } = require('../models'); // models/index
const bcrypt = require('bcrypt');
const saltNumber = 10;

////////////////////////////////
//GET
//메인페이지
const main = (req, res) => {
  res.render('index');
};
//회원가입페이지
const signup = (req, res) => {
  res.render('signup');
};
//로그인페이지
const signin = (req, res) => {
  res.render('signin');
};
//회원정보 조회 페이지
const profile = (req, res) => {
  User.findOne({
    where: { id: req.params.number },
  }).then((result) => {
    res.render('profile', { data: result });
  });
};

//회원가입
const post_signup = (req, res) => {
  const { userid, name, pw } = req.body;
  const bpw =  bcryptPassword(pw);
  User.create({
    userid,
    name,
    pw: bpw,
  }).then(() => res.json({ result: true }));
};

//로그인
const post_signin = (req, res) => {
  const { userid, pw } = req.body;
  User.findOne({
    where: { userid },
  }).then((result) => {
    if (result) {
        if(comparePassword(pw, result.pw)){
            res.json({ result: true, data: result })
        }
    }
    res.json({ result: false });
  });
};

//PATCH
const edit_profile = (req, res) => {
  const { name, pw, id } = req.body;
  User.update(
    {
      name,
      pw,
    },
    {
      where: { id },
    }
  ).then(() => res.send({ result: true }));
};

const delete_profile = (req, res) => {
    const { id } = req.body;
    User.destroy({
        where: {id}
    }).then(() => {
        res.send({result: true});
    });
}

const bcryptPassword = (password) => {
  return bcrypt.hashSync(password, saltNumber);
};

// 검증
const comparePassword = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
};

module.exports = {
  main,
  signup,
  signin,
  profile,
  post_signup,
  post_signin,
  edit_profile,
  delete_profile,
};

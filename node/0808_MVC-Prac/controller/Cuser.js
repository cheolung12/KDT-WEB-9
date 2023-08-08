const User = require("../model/user");

exports.main = (req, res) => {
  res.render("index");
};

exports.signup = (req, res) => {
  res.render("signup");
};

exports.signin = (req, res) => {
  res.render("signin");
};

exports.postSignUp = (req, res) => {
  User.postSignUp(req.body, () => {
    res.send({ result: true });
  });
};

exports.postSignIn = (req, res) => {
  User.postSignIn(req.body, (rows) => {
    if (rows.length === 0) {
      res.send({ result: false });
    } else {
      res.send({ 
        result: true,
        id: rows[0].id,
        userid: rows[0].userid,
        name: rows[0].name,
        pw: rows[0].pw,
    });
    }
  });
};

exports.profile = (req, res) => {
    res.render('profile', req.body);
};


exports.edit = (req, res) => {
    User.edit(req.body, () => {
      res.send({ result: true });
    });
  };
  
  exports.delete = (req, res) => {
    User.delete(req.body, () => {
      res.send({ result: true });
    });
    };
  
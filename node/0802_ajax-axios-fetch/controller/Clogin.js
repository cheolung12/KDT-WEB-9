const userInfo = require("../model/MUserInfo");

exports.main = (req, res) => {
  res.render("practice2");
};

exports.login = (req, res) => {
  const { id, pw } = userInfo.userInfo();
  const { userID, userPW } = req.body;
  if (userID === id && userPW === pw) {
    res.send(true);
  } else {
    res.send(false);
  }
};

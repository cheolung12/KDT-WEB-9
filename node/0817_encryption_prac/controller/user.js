const { v4: uuidv4 } = require('uuid');
const models = require('../models');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const SECRET = 'secret_key';
const ITER = 100;
const KEY_LEN = 64;
const ALGO = 'sha512';

exports.index = (req, res) => {
  res.render('index');
};

exports.login = (req, res) => {
  res.render('login');
};

exports.signup = (req, res) => {
  res.render('signup');
};

exports.postSignup = async (req, res) => {
  try {
    const { name, userid, pw } = req.body;
    const salt = crypto.randomBytes(16).toString('base64');
    const result = await models.User.create({
      id: uuidv4(),
      userid,
      pw: createPbkdf(pw, salt),
      name,
      salt,
    });
    if (result) res.json({ result: true });
  } catch (error) {
    console.log(error);
  }
};

exports.postLogin = (req, res) => {
  const { userId, userPw } = req.body;
  models.User.findOne({
    where: { userid: userId },
  }).then((result) => {
    if (result) {
      const { salt, userid, pw, name } = result.dataValues;
      if (verifyPassword(userPw, salt, pw, ITER, KEY_LEN, ALGO)) {
        const token = jwt.sign({ userid, name }, SECRET);
        res.send({ result: true, token });
      }
    }
    res.send({ result: false });
  });
};

/////// 함수  ///////
const createPbkdf = (password, salt) => {
  const hash = crypto.pbkdf2Sync(password, salt, ITER, KEY_LEN, ALGO);
  return hash.toString('base64');
};

const verifyPassword = (password, salt, dbPassword, iter, keylen, algo) => {
  const compare = crypto
    .pbkdf2Sync(password, salt, iter, keylen, algo)
    .toString('base64');
  if (compare === dbPassword) {
    return true;
  }
  return false;
};

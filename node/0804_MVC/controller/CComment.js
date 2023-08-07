const Comment = require("../model/MComment");

exports.main = (req, res) => {
  res.render("index");
};

exports.comments = (req, res) => {
  res.render("comments", { commentInfos: Comment.comments() });
};

// : 을 활용하여 params 표현
// :뒤에 있는 값이 params의 key 값으로 들어간다
exports.comment = (req, res) => {
  console.log(req.params);
  console.log(req.params.id);
  const commentId = req.params.id;
  const comments = Comment.comments();
  console.log(Comment.comments()[commentId - 1]);
  res.render("comment", { commentInfo: comments[commentId - 1] });
};


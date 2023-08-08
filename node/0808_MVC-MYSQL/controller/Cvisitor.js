const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (_, res) => {
  Visitor.getVisitors((rows) => {
    res.render("visitor", { data: rows });
  });
};

exports.getVisitor = (req, res) => {
  Visitor.getVisitor(req.query.id, (rows) => {
    res.render("visitor", { data: rows });
  });
};

exports.createVisitor = (req, res) => {
  Visitor.createVisitor(req.body, (data) => {
    res.send({
      id: data.insertId,
      name: req.body.name,
      comment: req.body.comment,
    });
  });
};

exports.editVisitor = (req, res) => {
  Visitor.editVisitor(req.body, () => {
    res.send({ result: true });
  });
};

exports.deleteVisitor = (req, res) => {
  Visitor.deleteVisitor(req.body, () => {
    res.send({ result: true });
  });
  };

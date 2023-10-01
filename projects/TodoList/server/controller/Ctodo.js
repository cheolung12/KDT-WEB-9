const { Todo } = require('../models');

exports.get_todo = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.json(false);
  }
};

exports.post_todo = async (req, res) => {
  const { title } = req.body;
  try {
    await Todo.create({
      title,
    });
    res.json(true);
  } catch (error) {
    console.log(error);
    res.json(false);
  }
};

exports.edit_todo = async (req, res) => {
  const id = req.params.todoId;
  const { title } = req.body;
  try {
    await Todo.update({ title }, { where: { id } });
    res.json(true);
  } catch (error) {
    console.log(error);
    res.json(false);
  }
};

exports.edit_todo_status = async (req, res) => {
  let { id, done } = req.body;
  if (done) done = 1;
  else done = 0;
  console.log(done);
  try {
    await Todo.update({ done }, { where: { id } });
    res.json(true);
  } catch (error) {
    console.log(error);
    res.json(false);
  }
}

exports.delete_todo = async (req, res) => {
  const id = req.params.todoId;
  try {
    await Todo.destroy({ where: { id } });
    res.json(true);
  } catch (error) {
    console.log(error);
    res.json(false);
  }
};

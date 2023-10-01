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

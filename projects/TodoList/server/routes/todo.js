const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctodo');

// show all todos
router.get('/', controller.get_todo);

// create a new todo
router.post('/', controller.post_todo);

// edit a status todo
router.patch('/status', controller.edit_todo_status);

// edit a specific todo
router.patch('/:todoId', controller.edit_todo);

// remove a specific todo
router.delete('/:todoId', controller.delete_todo)

module.exports = router;
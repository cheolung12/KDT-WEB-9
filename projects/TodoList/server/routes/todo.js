const express = require('express');
const router = express.Router();
const controller = require('../controller/todo');

// show all todos
router.get('/', controller.get_todo);

// create a new todo
router.post('/', controller.post_todo);

// edit a specific todo
router.patch('/:todoId', controller.edit_todo )

// remove a specific todo
router.delete('/:todoId', controller.delete_todo)

module.exports = router;
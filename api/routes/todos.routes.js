const express = require('express');

const router = express.Router();

const {
    allTodos,
    createTodo,
    updateTodo,
    updateState
} = require('../controllers/todos.controller');


// Mostrar todos
router.get('/', allTodos);

// Crear todo
router.post('/', createTodo);

// actualizar todo
router.patch('/:id', updateTodo);

// soft delete
router.patch('/:id', updateState);



module.exports = { todosRouter: router }

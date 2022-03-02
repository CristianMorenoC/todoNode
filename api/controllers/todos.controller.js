const express = require('express');

const { Todo } = require('../models/todo.model')

exports.allTodos = async (req, res) => {

    try {
        
        const todos = await Todo.findAll({ where: {status: 'active'}});

        res.status(200).json({
            status: 'success',
            data: {
                todos
            }
        });
    } catch (error) {
        console.log(error);
    }
    
}

exports.allTodos = async (req, res) => {
    
}

exports.createTodo = async (req, res) => {
    
}

exports.updateTodo = async (req, res) => {
    
}

exports.updateState = async (req, res) => {
    
}


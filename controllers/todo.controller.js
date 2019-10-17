const todoModel = require("../model/todo.model");

exports.createTodo = async (request, response, next) => {
    const createdTodo = await todoModel.create(request.body);
    response.status(201).json(createdTodo);
};
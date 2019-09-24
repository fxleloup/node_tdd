const todoController = require("../../controllers/todo.controller");

describe("todoController.createTodo", () => {

   it("should have a createTodo function", () => {
       expect(typeof todoController.createTodo).toBe("function");
   }); 
});
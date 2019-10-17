const todoControllerUnderTest = require("../../controllers/todo.controller");
const todoModelMock = require("../../model/todo.model");
const httpMockBuilder = require("node-mocks-http");
const givenNewTodo = require("../mock-data/new-todo.json");

todoModelMock.create = jest.fn();

let requestMock;
let responseMock;
let nextMock;

beforeEach(() => {
    // given
    requestMock = httpMockBuilder.createRequest();
    responseMock = httpMockBuilder.createResponse();
    nextMock = null;
});

describe("todoController.createTodo", () => {

    beforeEach(() => {
        // given
        requestMock.body = givenNewTodo;
    });

    it("should have a createTodo function", () => {
        // given
        // when
        // then
        expect(typeof todoControllerUnderTest.createTodo).toBe("function");
    });

    it("should call todoModelMocked.create", () => {
        // given
        // when
        todoControllerUnderTest.createTodo(requestMock, responseMock, nextMock);
        // then
        expect(todoModelMock.create).toBeCalledWith(givenNewTodo);
    });

    it("should return 201 response code", () => {
        // given
        // when
        todoControllerUnderTest.createTodo(requestMock, responseMock, nextMock);
        // then
        expect(responseMock.statusCode).toBe(201);
        expect(responseMock._isEndCalled()).toBeTruthy();
    });

    it("should return json body in response", () => {
        // given
        todoModelMock.create.mockReturnValue(givenNewTodo);
        // when
        todoControllerUnderTest.createTodo(requestMock, responseMock, nextMock);
        // then
        expect(responseMock._getJSONData()).toStrictEqual(givenNewTodo);
    });
});
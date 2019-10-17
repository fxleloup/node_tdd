const givenRequest = require("supertest");
const app = require("../../app");
const givenNewTodo = require("../mock-data/new-todo.json");

const endpoinUrl = "/todos/";

describe(endpoinUrl, () => {
    it("POST " + endpoinUrl, async () => {
        // given
        const expectedReturnstatus = 201;
        // when
        const actualResponse = await givenRequest(app)
            .post(endpoinUrl)
            .send(givenNewTodo);
        // then
        expect(actualResponse.status).toBe(expectedReturnstatus);
        const actualTodo = actualResponse.body;
        expect(actualTodo.title).toBe(givenNewTodo.title);
        expect(actualTodo.done).toBe(givenNewTodo.done);
    });
});
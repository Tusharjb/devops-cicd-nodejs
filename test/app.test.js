const request = require("supertest");
const app = require("../src/app");

describe("DevOps Task Manager", () => {

  test("GET / should return the web application", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("DevOps Task Manager");
  });

  test("GET /api/health should return UP status", async () => {
    const response = await request(app).get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

});
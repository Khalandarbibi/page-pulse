const request = require("supertest");
const app = require("../src/app");

describe("Page Pulse API", () => {

    test("GET / should return health status", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.body.success).toBe(true);
    });

    test("POST /api/v1/audit without URL should fail", async () => {
        const response = await request(app)
            .post("/api/v1/audit")
            .send({});

        expect(response.statusCode).toBe(400);
        expect(response.body.success).toBe(false);
    });

});
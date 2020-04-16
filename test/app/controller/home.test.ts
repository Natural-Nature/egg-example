import * as assert from "assert";
import { app } from "egg-mock/bootstrap";

describe("test/app/controller/home.test.ts", () => {
  it("should GET /home", async () => {
    app.mockCsrf();
    const result = await app.httpRequest().get("/home").expect(200);
    assert(result.text === "Hello world");
  });
});

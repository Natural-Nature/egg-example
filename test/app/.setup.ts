import { app } from "egg-mock/bootstrap";
import factories from "./factories";

before(() => factories(app));
afterEach(async () => {
  // clear database after each test case
  await Promise.all([app.model.User.destroy({ truncate: true, force: true })]);
});

import { Application } from "egg";

const users = (app: Application) => {
  const { router, controller } = app;
  router.resources("users", "/api/users", controller.users);
};

export default users;

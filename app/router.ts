import { Application } from "egg";

import newsRouter from "./router/news";
import usersRouter from "./router/users";

export default (app: Application) => {
  const { controller, router } = app;

  router.get("/home", controller.home.index);

  router.redirect("/", "/home");

  // 导入其他路由
  newsRouter(app);
  usersRouter(app);
};

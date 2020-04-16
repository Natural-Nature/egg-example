import { Application } from "egg";

const news = (app: Application) => {
  const { router, controller } = app;
  router.get("/news/detail", controller.news.detail);
  router.get("/news/list", controller.news.list);

  router.redirect("/news", "/news/detail");
};

export default news;

import { factory } from "factory-girl";
import { Application } from "egg";

const factories = (app: Application) => {
  // 可以通过 app.factory 访问 factory 实例
  app.factory = factory;

  // 定义 user 和默认数据
  factory.define("user", app.model.User, {
    name: factory.sequence("User.name", (n: any) => `name_${n}`),
    age: 18,
  });
};

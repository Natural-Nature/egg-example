// options === app.config.robot

import { Application, Context } from "egg";

module.exports = (options: any, app: Application) => {
  return async function robotMiddleware(ctx: Context, next: Function) {
    const source = ctx.get("user-agent") || "";
    const match = options.ua.some((ua: RegExp) => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = "Go away,robot.";
    } else {
      await next();
    }
  };
};

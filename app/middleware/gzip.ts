import zlib from "zlib";
import { Application, Context } from "egg";
import helper from "../extend/helper";

module.exports = (options: any, app: Application) => {
  return async function gzip(ctx: Context, next: Function) {
    await next();

    // 后续中间件执行完成后将响应体转换成gzip
    let body = ctx.body;
    if (!body) return;

    // 支持options.threshold
    if (options.threshold && ctx.length < options.threshold) return;

    if (helper.isJSON(body)) body = JSON.stringify(body);

    // 设置 gzip body，修正响应头
    const stream = zlib.createGzip();
    stream.end(body);
    ctx.body = stream;
    ctx.set("Content-Encoding", "gzip");
  };
};

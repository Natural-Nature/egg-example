import { Controller } from "egg";

export default class BaseController extends Controller {
  get user() {
    return this.ctx.session.user;
  }

  success(data: object) {
    this.ctx.body = {
      code: 0,
      data,
    };
  }

  error(msg: string, code?: number) {
    this.ctx.body = {
      code: code || -1,
      msg,
    };
    this.ctx.throw(404, msg);
  }
}

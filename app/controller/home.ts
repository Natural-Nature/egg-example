import BaseController from "../core/BaseController";

class HomeController extends BaseController {
  async index() {
    const start = Date.now();
    this.ctx.body = "Hello world";
    this.logger.info("~~~", this.ctx.query);
    this.logger.info("~~~", this.ctx.queries);
    this.app.coreLogger.info("启动耗时 %d ms", Date.now() - start);
  }
}

module.exports = HomeController;

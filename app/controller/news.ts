import BaseController from "../core/BaseController";

class NewsController extends BaseController {
  async list() {
    const { ctx } = this;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    ctx.locals.autor = "N.T.";
    ctx.locals.name2 = "N.T.Natural";

    await ctx.render("news/list", { list: newsList });
    // ctx.body = await ctx.renderView("news/list", { list: newsList });
  }

  async detail() {
    await this.ctx.render("news/create", { url: "/api/users" });
  }
}

module.exports = NewsController;

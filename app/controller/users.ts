import BaseController from "../core/BaseController";

const toInt = (str: any) => {
  if (typeof str === "number") return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
};

// 定义创建接口的请求参数规则
const createRule = {
  name: "string",
};

class UsersController extends BaseController {
  async create() {
    const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule, ctx.request.body);
    // 调用 service 创建一个 topic
    const rst = await ctx.service.users.create(ctx.request.body);
    // 设置响应体和状态码
    ctx.body = rst;
    ctx.status = 201;

    // const ctx = this.ctx;
    // const { name, age } = ctx.request.body;
    // const user = await ctx.model.User.create({ name, age });
    // ctx.status = 201;
    // ctx.body = user;
  }

  async index() {
    const ctx = this.ctx;
    const query = {
      limit: toInt(ctx.query.limit),
      offset: toInt(ctx.query.offset),
    };
    ctx.body = await ctx.model.User.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(toInt(ctx.params.id));
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await user.update({ name, age });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

export default UsersController;

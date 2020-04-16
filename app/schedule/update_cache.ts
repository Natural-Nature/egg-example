/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { Subscription } from "egg";

class UpdateCache extends Subscription {
  // 通过 schedule 属性来设置定时任务执行间隔等配置
  static get schedule() {
    return {
      interval: "1m", // 1 分钟间隔
      type: "all", // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正的那个是任务执行被运行的函数
  async subscribe() {
    // const res = await this.ctx.curl("http://www.api.com/cache", {
    //   dataType: "json",
    // });
    // @ts-ignore
    this.ctx.app.cache = +new Date(); // res.data;
  }
}
export default UpdateCache;

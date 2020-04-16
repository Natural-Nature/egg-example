import BaseService from "../core/BaseService";

class UsersService extends BaseService {
  async create(params: any) {
    // 调用 CNode V1 版本 API
    const result = {
      status: 200,
      data: { ...params, success: 1 },
    };
    // 检查调用是否成功，如果调用失败会抛出异常
    this.checkSuccess(result);
    // 返回创建的 topic 的 id
    return result;
  }
}

export default UsersService;

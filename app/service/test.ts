import BaseService from "../core/BaseService";

class NewsService extends BaseService {
  async sayHi(msg: string) {
    return `hi, ${msg}`;
  }
}

export default NewsService;

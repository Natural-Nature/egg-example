// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require("moment"); // 这里用import导入是无效的！！！
// import读取的moment居然是undefined
moment.locale("zh-cn");

const helper = {
  relativeTime: (time: number) => {
    return moment(time * 1000).fromNow();
  },
  isJSON: (body: any) => {
    if (!body) return false;
    if (typeof body === "string") return false;
    if (typeof body.pipe === "function") return false;
    if (Buffer.isBuffer(body)) return false;
    return true;
  },
};

export default helper;

import { EggAppConfig, EggAppInfo, PowerPartial, Context } from "egg";
// import mysql from "./mysql/config.mysql";

export default (appInfo: EggAppInfo): object => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1586744581570_4987";

  // 设置默认请求参数解析器配置
  config.bodyParser = {
    jsonLimit: "1mb",
    formLimit: "1mb",
  };
  // 设置参数效验插件
  config.validate = {
    enable: true,
    package: "egg-validate",
  };
  config.security = {
    csrf: {
      queryName: "_csrf", // 通过 query 传递 CSRF token 的默认字段为 _csrf
      bodyName: "_csrf", // 通过 body 传递 CSRF token 的默认字段为 _csrf
    },
    /*
    ssrf: {
      ipBlackList: [
        "10.0.0.0/8", // 支持 IP 网段
        "0.0.0.0/32",
        "127.0.0.1", // 支持指定 IP 地址
      ],
      checkAddress: function (ip) {
        // 配置了 checkAddress 时，ipBlackList 不会生效
        return ip !== "127.0.0.1";
      },
    },
    */
    domainWhiteList: [".domain.com"], // 安全白名单，以 . 开头，用以ctx.redirect(url)的重定向检测
  };
  config.jsonp = {
    callback: "callback", // 识别 query 中的 `callback` 参数
    limit: 100, // 函数名最长为 100 个字符
    csrf: false,
    whiteList: [".domain.com"],
  };

  // add your egg config in here
  config.middleware = ["robot", "gzip", "errorHandler"];
  config.robot = { ua: [/curl/i, /Baiduspider/i] };
  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };
  config.errorHandler = {
    match: "/api",
  };

  /** 添加关于页面路由具体相关的配置 **/
  // 添加 view 配置
  config.view = {
    defaultViewEngine: "nunjucks",
    defaultExtension: ".nj",
    mapping: {
      ".nj": "nunjucks",
      ".tpl": "nunjucks",
    },
  };

  // 添加 news 的配置项
  config.news = {
    pageSize: 5,
    serverUrl: "https://hacker-news.firebaseio.com/v0",
  };

  // 错误异常处理
  config.onerror = {
    all(err: Error, ctx: Context) {
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      ctx.body = "error";
      ctx.status = 500;
    },
    html(err: Error, ctx: Context) {
      // html hander
      ctx.body = "<h3>error</h3>";
      ctx.status = 500;
    },
    json(err: Error, ctx: Context) {
      // json hander
      ctx.body = { message: "error" };
      ctx.status = 500;
    },
    jsonp(err: Error, ctx: Context) {
      // 一般来说，不需要特殊针对 jsonp 进行错误定义，jsonp 的错误处理会自动调用 json 错误处理，并包装成 jsonp 的响应格式
    },
  };

  // 404
  // config.notfound = {
  //   pageUrl: "/public/index.html",
  // };

  // language
  config.i18n = {
    defaultLocale: "zh-CN",
  };

  // config.mysql = mysql;
  // config.sequelize = {
  //   dialect: "mysql",
  //   host: "127.0.0.1",
  //   port: 3306,
  //   database: "egg-sequelize-doc-default",
  // };

  // the return config will combines to EggAppConfig
  return {
    ...config,
  };
};

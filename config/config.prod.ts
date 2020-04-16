import { EggAppConfig, PowerPartial } from "egg";

export default () => {
  const config: PowerPartial<EggAppConfig> = {
    logger: {
      level: "DEBUG",
      allowDebugAtProd: true, // 允许打印Debug级别及以上的日志信息，以供调试
    },
  };
  return config;
};

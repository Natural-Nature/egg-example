import { EggPlugin } from "egg";

const plugin: EggPlugin = {
  // static: true,
  nunjucks: {
    enable: true,
    package: "egg-view-nunjucks",
  },
  validate: {
    enable: true,
    package: "egg-validate",
  },
  // mysql: {
  //   enable: true,
  //   package: "egg-mysql",
  // },
  // sequelize: {
  //   enable: true,
  //   package: "egg-sequelize",
  // },
  passport: {
    enable: true,
    package: "egg-passport",
  },
  passportGithub: {
    enable: true,
    package: "egg-passport-github",
  },
};

export default plugin;

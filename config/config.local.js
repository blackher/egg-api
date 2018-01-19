exports.mysql = {
  // 单数据库信息配置
  client: {
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    user: 'root',
    // 密码
    password: '123456',
    // 数据库名
    database: 'egg-test',
  },
  // 是否加载到 app 上，默认开启
  app: true,
  // 是否加载到 agent 上，默认关闭
  agent: false,
};
exports.redis = {
  client: {
    host: '192.168.11.98',
    port: '6379',
    password: '',
    db: '0',
  },
  agent:true
};
//小程序appId  key
exports.weappSDK = {
    appId: 'wxadae2bebcd52fe10',
    appSecret: '374c3034429779a7ccaea4757714c874',
};
//设置session
exports.sessionRedis = {
   maxAge: 24 * 3600 * 1000, // 1 天
   httpOnly: true,
   encrypt: false,
};

exports.sequelize = {
  dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
  database: 'egg-test',
  host: '127.0.0.1',
  port: '3306',
  username: 'root',
  password: '123456',
  operatorsAliases:false,
};

'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_154787887_12321';

  // add your config here
  config.middleware = ['errorHandler','checkLogin'];

  
  (config.errorHandler = {
  	match:"/api"
  });
  (config.checkLogin = {
    ignore:"/api/v1/login"
  });
  config.security = {
  	csrf:{
  		ignore:'/api',
  	}
  };


  return config;
}
;



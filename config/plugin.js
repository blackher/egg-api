'use strict';

// had enabled by egg
// exports.static = true;
exports.mysql = {
	enabled:true,
	package:'egg-mysql',
}

exports.validate = {
	enabled:true,
	package:'egg-validate',
}

exports.redis = {
  enable: true,
  package: 'egg-redis',
};
//session
exports.sessionRedis = {
  enable: true,
  package: 'egg-session-redis',
};
//orm
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
}
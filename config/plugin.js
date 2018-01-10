'use strict';

// had enabled by egg
// exports.static = true;
exports.mysql = {
	enabled:false,
	package:'egg-mysql',
}

exports.validate = {
	enabled:true,
	package:'egg-validate',
}
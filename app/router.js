'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/v1/login', controller.login.index);
  router.resources('user','/api/v1/user/:id', controller.user);
  router.resources('active', '/api/v1/active', controller.active);
  router.resources('join', '/api/v1/join/:id', controller.join);
};




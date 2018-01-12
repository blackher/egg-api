'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/login', controller.login.index);
  router.resources('user','/api/v1/user/:id', controller.user);
  router.resources('active', '/api/v1/active', controller.active);
};




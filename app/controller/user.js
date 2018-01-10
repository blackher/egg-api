'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则


class UserController extends Controller {
  async index() {
    const ctx = this.ctx;
    const user = await ctx.service.user.find(ctx.params.id);
    ctx.body = user;
  }
}


module.exports = UserController;
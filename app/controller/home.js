'use strict';

const Controller = require('egg').Controller;


class HomeController extends Controller {
  async index() {
 	const ctx = this.ctx;
 	const res = ctx.service.join.create(ctx);
  	//console.log(transaction);
    ctx.body = 'hi, egg';
    
    // 设置响应体和状态码
  }
}

module.exports = HomeController;

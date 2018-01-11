'use strict';

var Redis = require('ioredis');

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则

const createRule = {
	//用户code参数
  	code: {type:'string',required:true}//
};

class loginController extends Controller {
  async index() {
    const ctx = this.ctx;

    ctx.session.user = {name:123};
    const userid = ctx.session.user;
    ctx.body = userid;



  }
}


module.exports = loginController;
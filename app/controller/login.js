'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则

const createRule = {
	//用户code参数
  	code: {type:'string',required:true}//
};

class loginController extends Controller {
  async index() {
    const ctx = this.ctx;
    
    let userInfo = ctx.session.user;
    //没有登陆的情况下
    if(!userInfo){
    	//校验是否带有参数
    	ctx.validate(createRule);

    	const code = ctx.body.code;
    	
    	//登陆获取用的openid sessionid

    	const res = await ctx.service.jscode2session.getSessionKey(code);
    	const users = await  ctx.model.User.findOrCreate({
    		where:{
    			'openid':res.openid,

    		},
    		defaults:{
    			'openid':res.openid,
    		}

    	})
    	console.log(users);
    	//记录到session
    	ctx.session.user = users;

    }

    ctx.body = {
      message:" login success"
    };
    ctx.status = 201;

  }
}


module.exports = loginController;
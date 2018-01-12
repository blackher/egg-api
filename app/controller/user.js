'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则

const createRule = {
	//用户code参数
  	: {type:'string',required:true}//
};


class UserController extends Controller {

  async index() {
    const ctx = this.ctx;
    const user = await ctx.model.User.findOne(ctx.params.id);
    ctx.body = user;
  }
  async update(){
  	const ctx = this.ctx;
  	const user =  await ctx.model.User.update({
  		vaule:{
  			'nickName' :  ctx.body.nickName,
  			'avatarUrl':  ctx.body.avatarUrl,
  			'gender'   :  ctx.body.gender,
  			'city'     :  ctx.body.city,
  			'country'  :  ctx.body.country,
  		},
  		where:{
    		'openid'   :  ctx.body.openid,
    	}
    		
  	})
  	ctx.body = user;

  }
}


module.exports = UserController;
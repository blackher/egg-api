'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则

const createRule = {

  descript: {type:'string',required:true},
  content: {type:'string',required:true},
  start_at   :  {type:'string',required:true},
  end_at     :  {type:'string',required:true},
};


class ActiveController extends Controller {
  //创建活动
  async create() {
     const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    //ctx.validate(createRule);
    // 调用 service 创建一个 active 活动
    //拼装数据
    ctx.body = Object.assign({},ctx.request.boy);

    
    const param = Object.assign({},ctx.request.body,{'user_id':JSON.parse(ctx.session.user).user_id});
    
    const res = await ctx.service.active.create(param);
    // 设置响应体和状态码
   
    ctx.status = 201;
  }
  
  
}


module.exports = ActiveController;
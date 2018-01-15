'use strict';

const Controller = require('egg').Controller;

// 定义创建接口的请求参数规则
const createRule = {};
class JoinController extends Controller {
  //参加活动
  async create() {
     const ctx = this.ctx;
    // 校验 `ctx.request.body` 是否符合我们预期的格式
    // 如果参数校验未通过，将会抛出一个 status = 422 的异常
    ctx.validate(createRule);
    const activeInfo = await ctx.model.Join.findOne(ctx.params.id);
    //限制人数 活动
    // if(activeInfo.user_limit >0 && activeInfo.max_user_num =>activeInfo.user_attend_num){
    //   ctx.body = {
    //     message:"active num is enough"
    //   }
    //   ctx.status = 405;
    // }else{
    // 调用 service 创建一个 join 活动
      // const param = Object.assign(
      //   {},
      //   ctx.request.body,
      //   {'join_user_id':JSON.parse(ctx.session.user).user_id},
      //   {'active_user_id':JSON.parse(activeInfo).user_id},
      //   {'user_max_num':JSON.parse(activeInfo).user_max_num}
      //   );
      // const res = ctx.service.join.create(param);


      // //const res = ctx.service.
      // // 设置响应体和状态码
      // ctx.body = {
      //   topic_id: res.insertId,
      //   message:"success"
      // };
      ctx.status = 201;
  //}

  }
  
}


module.exports = JoinController;
const Service = require('egg').Service;//

class JoinService extends Service {
  async create(params) {
  	const ctx = this.ctx;
    
    const res = await ctx.model.Join.create({
      vaule:{
    	   active_user_id    :  params.active_user_id,
    	   join_user_id    :  params.join_user_id
      },
      transaction:{
           ctx.service.active.attend(param);

      }
    });
    return res;
  }
}
module.exports = JoinService;
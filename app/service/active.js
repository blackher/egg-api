const Service = require('egg').Service;//

class ActiveService extends Service {
  async create(params) {
  	const ctx = this.ctx;
    const res = await ctx.model.Active.create({
    	user_id    :  params.user_id,
    	content    :  params.content,
    	descript   :  params.descript,
    	user_limit :  params.user_limit,
    	start_at   :  params.start_at,
    	end_at     :  params.end_at,
    	user_max_num: params.user_max_num
    });
    return res;
  }
  async attend (params){
  	const ctx = this.ctx;
  	const res = await ctx.model.Active.update({

  		vaule:{
  			'user_max_num' :  params.user_max_num+1,
  			
  		},
  		where:{
    		'id'   :  params.id,
    	}
  	})
  	return res;
  }
}
module.exports = ActiveService;
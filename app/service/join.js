const Service = require('egg').Service;//



class JoinService extends Service {
  async create(params) {
  
    const app = this.app;
    const ctx = this.ctx;
    
     await app.model.transaction((t) => {
    
      return  app.model.Join.create({
          active_user_id    :  params.active_user_id,
          join_user_id    :  params.join_user_id
        },{transaction:t}).then(()=>{
            return app.model.Active.update({'user_max_num':params.user_max_num},{
              where:{'id':params.id},
              transaction:t
        }).then((res)=>{
            //has been commit 
            
        });
      
    })
    })    

  }
}
module.exports = JoinService;
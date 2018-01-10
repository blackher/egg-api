const Service = require('egg').Service;//

class ActiveService extends Service {
  async create(params) {
    const res = await this.app.mysql.insert('active',{organ_user_id:params.organ_user_id,content:params.content});
    return res;
  }
}
module.exports = ActiveService;
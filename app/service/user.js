const Service = require('egg').Service;//

class UserService extends Service {
  async find(uid) {
  	console.log(uid);
    const user = await this.app.mysql.get('user',{id:uid});
    console.log(this.app.mysql);
    return user;
  }
}
module.exports = UserService;
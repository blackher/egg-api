const Service = require('egg').Service;//



class JoinService extends Service {
  async create(params) {
    

    //todo
    /*

  使用Sequelize 封装  但是不知道为什么ctx 全局参数传递
    */
    const conn = await this.app.mysql.beginTransaction();

    try {
        await conn.insert('joins', {

            active_user_id    :  123,

             join_user_id    :  123

              });  // 第一步操作
        await conn.update('actives',{
            'user_max_num' :  2,
            'id'   :  1,
        
      });
        
        await conn.commit(); // 提交事务  
    } catch (err) {
  // error, rollback
      await conn.rollback(); // 一定记得捕获异常后回滚事务！！
      throw err;
    }



  }
}
module.exports = JoinService;
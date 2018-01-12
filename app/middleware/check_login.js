'use strict';

//检测用户是否登陆中间件
module.exports = () => {
  return async function checkLogin(ctx, next) {
      if(ctx.seesion ===undefined ){
        
        const status =  411;
      
        const error = 'not login';

        
        ctx.body = { error };
      
        ctx.status = status;
      }else{

         await next();
      }
     
    }
};
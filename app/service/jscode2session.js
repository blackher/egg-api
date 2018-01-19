//'use strict'

const WXBizDataCrypt = require('./WXBizDataCrypt');
const Service = require('egg').Service;//


// 获取解密SessionKey

class Jscode2sessionService extends Service{

	_buildUrl(jscode)  {
  		const apiUrl = 'https://api.weixin.qq.com/sns/jscode2session';
  		const appId = this.config.weappSDK.appId;
  		const appSecret = this.config.weappSDK.appSecret;
  		const params = `?appid=${appId}&secret=${appSecret}&js_code=${jscode}&grant_type=authorization_code`;
  		return `${apiUrl}${params}`;
	}

	async  getSessionKey(jscode){
		try{
			const requestUrl =this. _buildUrl(jscode);
			const response = await  this.ctx.curl(requestUrl,{
			 		dataType:'json'
			 	})
			
			if(response.data.errcode){
				throw new Error(response.data.errmsg)
			}
			return response.data;
		}catch(err){
			this.logger.error(err);
			throw new Error(err);
		}

	}

	decrypt(sessionKey,encryptedData,iv){

		try{
			const appId = app.config.weappSDK.appId;
			const pc = new WXBizDataCrypt(appId, sessionKey);
			const data = pc.decryptData(encryptedData, iv)	
			return data;
		}catch(e){


			throw e;
		}

	}
}


module.exports = Jscode2sessionService;

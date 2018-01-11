'use strict'

const WXBizDataCrypt = 


const _buildUrl = jscode => {
  const apiUrl = 'https://api.weixin.qq.com/sns/jscode2session';
  const appId = app.config.weappSDK.appId;
  const appSecret = app.config.weappSDK.appSecret;
  const params = `?appid=${appId}&secret=${appSecret}&js_code=${jscode}&grant_type=authorization_code`;
  return `${apiUrl}${params}`;
};


// 获取解密SessionKey

async getSessionKey(jscode){
	try{
		const requestUrl = _buildUrl(jscode);
		const[response,body] = await this.ctx.curl(requePstUrl,{
			dataType:'json'
		})
		 // body: { session_key, expires_in, openid }
		if ('session_key' in body) {
      		return { sessionKey: body.session_key, openId: body.openid };
    	}

    	//error

    	const error = new Error('jscode failed to exchange session_key');
    	
    	throw error;
	}catch(error){

		throw error;
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


module.exports = {
  getSessionKey,
  decrypt,
};

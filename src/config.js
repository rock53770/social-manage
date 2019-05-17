/**
 * 全局配置文件
 * @type {Object}
 */

let DEFAULT_CONFIG = {
		isTest: false,	//用于开发阶段使用，全部启用测试通道，慎用再慎用
		pageSize: 20,	//分页条数
	},
	envConfig = {
	    //开发环境
	    development: {
          isTest: false || sessionStorage.isTest==1,
	    },
	    //生产环境
	    // production: {
        	// appId: 'wxecc8b92540f58725' 	//测试微信公众号
	    // }
	},
	config = Object.assign({}, DEFAULT_CONFIG);

try{
	if(process.env.NODE_ENV){
		Object.assign(config, envConfig[process.env.NODE_ENV]);
		config.env = process.env.NODE_ENV;
	}
}catch(ex){}
// alert(config.appId)
// console.log(config);
window.GConfig = config;
export default config

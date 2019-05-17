
import router from '@/router'
import Axios from 'axios'
import { Message } from 'element-ui';
// 创建实例时设置配置的默认值
let axios = Axios.create({
  timeout: 10000,
  baseURL: '/api'
});

axios.interceptors.request.use((config) => {

  config.method = config.method.toLowerCase();

  if(config.method == "get" && !config.params){
    config.params = config.data;
  }
  let headers = {
    'AccessToken': Util.getCookie("AccessToken"),
  }
  config.headers = Object.assign({},headers,config.headers)

  return config
}, (error) => {
  Message.error('' + error)
  return Promise.reject(error)
})

// 响应拦截
axios.interceptors.response.use((res) => {

  if (res.code && res.code == 1000) {
    Util.removeCookie("AccessToken");
    if(router.currentRoute.path != '/login'){
      app.$router.push({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
      });
    }
  }

  return res.data
}, (error) => {
  Message.error('' + error)
  return Promise.reject(error)
})


export default axios



































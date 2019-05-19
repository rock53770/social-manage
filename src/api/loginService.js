
import axios from './axios'

export default {
  //登录
  login(data){
    return axios({
      method: 'post',
      url: '/login',
      data: data
    });
  },
};




































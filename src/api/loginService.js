
import axios from './axios'

export default {
  verifyCode(data) {
    return axios({
      method: 'get',
      url: '/insurance/base/get/code',
      data: data,
    });
  },
  opencity(data){
    return axios({
      method: 'post',
      url: '/api/insurance/common/opencity',
      data: data
    });
  },
  appLogin(data){
    return axios({
      method: 'post',
      url: '/insurance/app/login/login',
      data: data
    });
  },
  updatePhone(data){
    return axios({
      method: 'post',
      url: '/insurance/xxb/user-agent/update/phone',
      data: data
    });
  },
};




































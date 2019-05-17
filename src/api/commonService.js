import axios from './axios'

export default {
  upload(data) {
    return axios({
      method: 'post',
      url: '/insurance/common/file/upload',
      data: data,
    });
  },
  payConfig(data) { // 订单支付
    return axios({
        method: 'post',
        url: '/insurance/policy/pay/config',
        data: data
    });
  },
}

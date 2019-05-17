import axios from './axios'

export default {
    //开通城市
    opencity(data){
      return axios({
        method: 'get',
        url: '/insurance/common/opencity',
        data: data
      });
    },
    //轮播图
    advertiseFind(data) {
        return axios({
            method: 'get',
            url: '/advertise/find',
            data: data,
        });
    },
    //生成报价单
    quote(data) {
        return axios({
            method: 'post',
            url: '/insurance/xxb/order/create',
            data: data,
        });
    },
    //获取消息列表页
    notice(data) {
        return axios({
            method: 'get',
            url: '/insurance/mine/notice/list',
            data: data,
        });
    },
};

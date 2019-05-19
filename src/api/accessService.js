import axios from './axios'

export default {
    //获取导航菜单
    getNavList(data){
      return axios({
        method: 'get',
        url: '/land/get_nav_list',
        data: data
      });
    },
};

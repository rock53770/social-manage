
import Layout from '@/page/layout/Layout'
import Login from '@/page/login'
//异步加载增加loading  会导致beforeRouteLeave等路由钩子失效 暂时先保持原样
function lazyLoadView (AsyncView) {
  return AsyncView
}

const routes = [{
      path: '/',
      redirect: {name: 'access'}
  }, {
      path: '/login',
      name: 'login',
      component: Login
  }, {
      // 首页
      path: '/access',
      component: Layout,
      meta:{
          requireLogin:true,
      },
      children: [{
          path: '',
          name: 'access',
          component: () => lazyLoadView(import(/* webpackChunkName: "access" */ '../page/access/index.vue'))
      }]
  }, {
      path: '*',
      redirect: '/'
  }]

export default routes;


import Layout from '@/page/layout/Layout'
import Login from '@/page/login'
//异步加载增加loading  会导致beforeRouteLeave等路由钩子失效 暂时先保持原样
function lazyLoadView (AsyncView) {
  return AsyncView
}

const routes = [{
      path: '/',
      redirect: '/land/manager'
  }, {
      path: '/login',
      name: 'login',
      component: Login
  }, {
      path: '/land',
      component:Layout,
      meta:{
        requireLogin:true,
      },
      children: [{
        path: 'manager',
        component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/manager')),
      },{
        path: 'operator',
        component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/operator')),
      },{
        path: 'leader',
        component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/leader')),
      }]
    },{
      path: '/privilege',
      component:Layout,
      children: [{
        path: 'organization',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/organization')),
      },{
        path: 'user_manage',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/user_manage')),
      },{
        path: 'role_manage',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/role_manage')),
      },{
        path: 'sys_para',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/sys_para')),
      },{
        path: 'data_dictionary',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/data_dictionary')),
      },{
        path: 'log_manage',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/log_manage')),
      },{
        path: 'database_manage',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/database_manage')),
      },{
        path: 'ftp_manage',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/ftp_manage')),
      },{
        path: 'api_manage',
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/api_manage')),
      }]
    },{
      path: '/resource',
      component:Layout,
      meta:{
        requireLogin:true,
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '*',
      redirect: '/'
  }]

export default routes;

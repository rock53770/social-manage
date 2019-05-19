
import Layout from '@/page/layout/Layout'
import Login from '@/page/login'
//异步加载增加loading  会导致beforeRouteLeave等路由钩子失效 暂时先保持原样
function lazyLoadView (AsyncView) {
  return AsyncView
}

const constantRoutes = [{
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
        name:'land-manager',
        meta:{
          title:'管理员'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/manager')),
      },{
        path: 'operator',
        name:'land-operator',
        meta:{
          title:'操作员'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/operator')),
      },{
        path: 'leader',
        name:'land-leader',
        meta:{
          title:'领导'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/leader')),
      }]
    },{
      path: '/privilege',
      component:Layout,
      children: [{
        path: 'organization',
        name: 'organization',
        meta:{
          title:'组织'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/organization')),
      },{
        path: 'user_manage',
        name: 'user_manage',
        meta:{
          title:'用户管理'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/user_manage')),
      },{
        path: 'role_manage',
        name: 'role_manage',
        meta:{
          title:'角色管理'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/role_manage')),
      },{
        path: 'sys_para',
        name: 'sys_para',
        meta:{
          title:'系统参数'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/sys_para')),
      },{
        path: 'data_dictionary',
        name: 'data_dictionary',
        meta:{
          title:'数据字典'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/data_dictionary')),
      },{
        path: 'log_manage',
        name: 'log_manage',
        meta:{
          title:'日志管理'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/log_manage')),
      },{
        path: 'database_manage',
        name: 'database_manage',
        meta:{
          title:'数据库管理'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/database_manage')),
      },{
        path: 'ftp_manage',
        name: 'ftp_manage',
        meta:{
          title:'FTP管理'
        },
        component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/ftp_manage')),
      },{
        path: 'api_manage',
        name: 'api_manage',
        meta:{
          title:'API管理'
        },
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

export default constantRoutes;

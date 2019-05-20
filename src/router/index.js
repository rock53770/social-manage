import Vue from 'vue'
import Router from 'vue-router'
// import { constantRoutes } from './routes'
import Layout from '@/page/layout/Layout'
import Login from '@/page/login'
Vue.use(Router)
function loadable(Asyncfn) {
  return Asyncfn
}
const constantRoutes = [{
  path: '/',
  redirect: '/land/manager'
}, {
  path: '/login',
  name: 'login',
  component: Login
}]

const asyncRoutes = [{
  path: '/land',
  component: Layout,
  meta: {
    requireLogin: true,
    title:'登陆门户'
  },
  children: [{
    path: 'manager',
    name: 'land-manager',
    meta: {
      title: '管理员'
    },
    component: loadable(() => import( /* webpackChunkName: "land" */ '@/page/land/manager')),
  }, {
    path: 'operator',
    name: 'land-operator',
    meta: {
      title: '操作员'
    },
    component: loadable(() => import( /* webpackChunkName: "land" */ '@/page/land/operator')),
  }, {
    path: 'leader',
    name: 'land-leader',
    meta: {
      title: '领导'
    },
    component: loadable(() => import( /* webpackChunkName: "land" */ '@/page/land/leader')),
  }]
}, {
  path: '/privilege',
  component: Layout,
  meta: {
    requireLogin: true,
    title:'权限管理'
  },
  children: [{
    path: 'organization',
    name: 'organization',
    meta: {
      title: '组织'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/organization')),
  }, {
    path: 'user_manage',
    name: 'user_manage',
    meta: {
      title: '用户管理'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/user_manage')),
  }, {
    path: 'role_manage',
    name: 'role_manage',
    meta: {
      title: '角色管理'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/role_manage')),
  }, {
    path: 'sys_para',
    name: 'sys_para',
    meta: {
      title: '系统参数'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/sys_para')),
  }, {
    path: 'data_dictionary',
    name: 'data_dictionary',
    meta: {
      title: '数据字典'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/data_dictionary')),
  }, {
    path: 'log_manage',
    name: 'log_manage',
    meta: {
      title: '日志管理'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/log_manage')),
  }, {
    path: 'database_manage',
    name: 'database_manage',
    meta: {
      title: '数据库管理'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/database_manage')),
  }, {
    path: 'ftp_manage',
    name: 'ftp_manage',
    meta: {
      title: 'FTP管理'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/ftp_manage')),
  }, {
    path: 'api_manage',
    name: 'api_manage',
    meta: {
      title: 'API管理'
    },
    component: loadable(() => import( /* webpackChunkName: "privilege" */ '@/page/privilege/api_manage')),
  }]
}, {
  path: '/resource',
  component: Layout,
  meta: {
    requireLogin: true,
    title:'资源管理'
  },
  children: [{
    path: 'manager',
    meta: {
      title: '管理员',
    }
  }]
}]

function generateAllNavList(routes) {
  const res = []
  routes.forEach(route => {
    let tmp = {...route}
    delete tmp.component
    if (tmp.children) {
      tmp.children = generateAllNavList(tmp.children)
    }
    res.push(tmp)
  })
  return res
}
let allNavList = generateAllNavList(asyncRoutes)
export function generatePermissNavList(asyncRoutes,a) {
  const res = []

  routes.forEach(route => {
    let found = asyncRoutes.find((k,v) => {k.path == route.path})
    let tmp = {...found}
    delete tmp.component

    if (tmp.children) {
      tmp.children = generatePermissNavList(tmp.children)
    }
    res.push(tmp)
  })

  return res
}

const lastRoutes = [{
  path: '*',
  redirect: '/'
}]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [...constantRoutes, ...asyncRoutes, ...lastRoutes]
})

const router = createRouter()

router.beforeEach((to, from, next) => {

  if(to.name === 'login'){

      if(from.name === 'login'){
          next(false)
      } else {
          next()
      }

  } else if(to.name === 'wxLogin'){
      next();
  } else {
      if (to.matched.some(record => record.meta.requireLogin)) {
          if (Util.getCookie("AccessToken")) {
              next()
          } else {
              next({
                  path: '/login',
                  query: { redirect: to.fullPath }
              })
          }
      } else {
          next()
      }
  }
})
//路由切换结束
router.afterEach(route => {
// Toast.clear();
})
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}


export {
  constantRoutes,
  asyncRoutes,
  allNavList,
  resetRouter
}
export default router



import Vue from 'vue'
import Router from 'vue-router'
import asyncRoutes from './routes'
import Layout from '@/layout/Layout'
import Login from '@/page/login'
import Intro from '@/page/doc/intro'
import redirect from '@/page/redirect/index'
Vue.use(Router)
// function loadable(Asyncfn) {
//   return Asyncfn
// }
const constantRoutes = [{
  path: '/',
  redirect: '/land/manager'
}, {
  path: '/login',
  name: 'login',
  component: Login
},{
  path: '/redirect',
  component: Layout,
  children: [
    {
      path: '/redirect/:path*',
      component: redirect
    }
  ]
},{
  path: '/doc',
  component: Layout,
  meta: {
    requireLogin: false,
  },
  children: [{
    path: 'index',
    name: 'intro',
    meta: {
      affix:true,
      title:'首页'
    },
    component: Intro,
  }]
}]
const lastRoutes = [{
  path: '*',
  redirect: '/'
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
let allConstantList = generateAllNavList(constantRoutes)
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
  allConstantList,
  resetRouter
}
export default router



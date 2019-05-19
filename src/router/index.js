import Vue from 'vue'
import Router from 'vue-router'
import constantRoutes from './routes'

Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: constantRoutes
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
              // next({
              //     path: '/login',
              //     query: { redirect: to.fullPath }
              // })
              next()
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
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

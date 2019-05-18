import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
    mode:  'history',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    routes: routes
})

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

export default router;

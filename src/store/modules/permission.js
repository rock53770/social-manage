// import { asyncRoutes, constantRoutes } from '@/router/routes'
// import  constantRoutes  from '@/router/routes'

const constantRoutes = [{
  path: '/',
  redirect: '/land/manager'
}, {
  path: '/login',
  name: 'login',
  // component: Login
}, {
  path: '/land',
  // component:Layout,
  meta:{
    requireLogin:true,
  },
  children: [{
    path: 'manager',
    name:'land-manager',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/manager')),
  },{
    path: 'operator',
    name:'land-operator',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/operator')),
  },{
    path: 'leader',
    name:'land-leader',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "land" */'@/page/land/leader')),
  }]
},{
  path: '/privilege',
  // component:Layout,
  children: [{
    path: 'organization',
    name:'organization',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/organization')),
  },{
    path: 'user_manage',
    name:'user_manage',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/user_manage')),
  },{
    path: 'role_manage',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/role_manage')),
  },{
    path: 'sys_para',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/sys_para')),
  },{
    path: 'data_dictionary',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/data_dictionary')),
  },{
    path: 'log_manage',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/log_manage')),
  },{
    path: 'database_manage',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/database_manage')),
  },{
    path: 'ftp_manage',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/ftp_manage')),
  },{
    path: 'api_manage',
    // component:lazyLoadView(()=>import(/* webpackChunkName: "privilege" */'@/page/privilege/api_manage')),
  }]
},{
  path: '/resource',
  // component:Layout,
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
/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
// function hasPermission(roles, route) {
//   if (route.meta && route.meta.roles) {
//     return roles.some(role => route.meta.roles.includes(role))
//   } else {
//     return true
//   }
// }

// /**
//  * Filter asynchronous routing tables by recursion
//  * @param routes asyncRoutes
//  * @param roles
//  */
// export function filterAsyncRoutes(routes, roles) {
//   const res = []

//   routes.forEach(route => {
//     const tmp = { ...route }
//     if (hasPermission(roles, tmp)) {
//       if (tmp.children) {
//         tmp.children = filterAsyncRoutes(tmp.children, roles)
//       }
//       res.push(tmp)
//     }
//   })

//   return res
// }

const state = {
  routes: constantRoutes,
  addRoutes: []
}

const mutations = {
  // SET_ROUTES: (state, routes) => {
  //   state.addRoutes = routes
  //   state.routes = constantRoutes.concat(routes)
  // }
}

const actions = {
  // generateRoutes({ commit }, roles) {
  //   return new Promise(resolve => {
  //     let accessedRoutes
  //     if (roles.includes('admin')) {
  //       accessedRoutes = asyncRoutes || []
  //     } else {
  //       accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
  //     }
  //     commit('SET_ROUTES', accessedRoutes)
  //     resolve(accessedRoutes)
  //   })
  // }
}

export default {
  namespaced: false,
  state,
  mutations,
  actions
}

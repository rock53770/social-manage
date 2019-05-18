// 用户填写的信息
export default {
	namespaced: false,
	state: {
		sideBar:{
      isCollapse: false,
    },
	},
	mutations: {
    TOGGLE_SIDEBAR: state => {
      state.sideBar.isCollapse = !state.sideBar.isCollapse
    },
    updateNav: (state, navList) => {
      state.navList = navList
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    updateNav({ commit },navList) {
      commit('updateNav',navList)
    },
	}
};


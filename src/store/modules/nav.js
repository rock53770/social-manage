// 用户填写的信息
export default {
	namespaced: false,
	state: {
    now:0,
		allList:[{
      path: '/land',
      meta:{
          title:'登录门户',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      },{
        path: 'operator',
        meta:{
            title:'操作员',
        }
      },{
        path: 'leader',
        meta:{
            title:'领导',
        }
      }]
    },{
      path: '/privilege',
      meta:{
          title:'权限管理',
      },
      children: [{
        path: 'organization',
        meta:{
            title:'组织机构',
        }
      },{
        path: 'user_manage',
        meta:{
            title:'用户管理',
        }
      },{
        path: 'role_manage',
        meta:{
            title:'角色管理',
        }
      },{
        path: 'sys_para',
        meta:{
            title:'系统参数',
        }
      },{
        path: 'data_dictionary',
        meta:{
            title:'数据字典',
        }
      },{
        path: 'log_manage',
        meta:{
            title:'日志管理',
        }
      },{
        path: 'database_manage',
        meta:{
            title:'数据库源管理',
        }
      },{
        path: 'ftp_manage',
        meta:{
            title:'FTP源管理',
        }
      },{
        path: 'api_manage',
        meta:{
            title:'API源管理',
        }
      }]
    },{
      path: '/resource',
      meta:{
          title:'资源目录管理',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '/data',
      meta:{
          title:'数据管理',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '/person',
      meta:{
          title:'人员管控',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '/keyarea',
      meta:{
          title:'重点区域',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '/keygoods',
      meta:{
          title:'重点物品',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '/caseanalysis',
      meta:{
          title:'案件分析',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '/deepmining',
      meta:{
          title:'深度挖掘',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '/land1',
      meta:{
          title:'全景分析',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    },{
      path: '/land2',
      meta:{
          title:'智能预测',
      },
      children: [{
        path: 'manager',
        meta:{
            title:'管理员',
        }
      }]
    }]
	},
	mutations: {
    update(state,allList) {
      state.allList = allList;
    },
    change(state,now) {
      state.now = now;
    }
  },
  actions:{
    update({commit},allList){
      commit("update",allList)
    },
    change({commit},now){
      commit("change",now)
    }
  }
};


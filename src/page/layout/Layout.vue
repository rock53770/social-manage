<template>
  <div class="app-wrapper" :class="{'hideSidebar':sideBar.isCollapse}">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <Navbar></Navbar>
      <div class="sub-container">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import { Navbar, Sidebar, AppMain, TagsView } from './components'
import { Navbar, Sidebar } from './components'
// import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  data(){
    return {
      isCollapse:false
    }
  },
  components: {
    Navbar,
    Sidebar,
    // AppMain,
    // TagsView
  },
  computed: {
    sideBar () {
      return this.$store.state.app.sideBar
    },
  },
  methods: {
    handleClickOutside() {
      // this.$store.dispatch('closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>
<style lang="less">
.app-wrapper {
  height: 100%;
}
.sidebar-container {
  position: fixed;
  top:0;
  left:0;
  width: 200px;
  height: 100%;
  overflow: hidden;
  transition: width 0.28s;
  .el-menu{
    border:none;
    width:100%!important;
  }
}
.hideSidebar{
  .sidebar-container{
    width:54px;
  }
  .main-container{
    margin-left:54px;
  }
  .navbar{
    left:54px;
  }
}

.main-container {
  margin-left:200px;
  transition: margin-left 0.28s;
  box-sizing:border-box;
  height:100%;

}
</style>

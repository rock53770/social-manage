<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>
    <!-- <div class="sidebar-container">
      <div style="height:13000px">11</div>
    </div> -->
    <div class="main-container">
      <div>head</div>
      <div class="sub-container"></div>

    </div>
  </div>
</template>

<script>
// import { Navbar, Sidebar, AppMain, TagsView } from './components'
import {  Sidebar } from './components'
// import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'Layout',
  replace: true,
  components: {
    // Navbar,
    Sidebar,
    // AppMain,
    // TagsView
  },
  // mixins: [ResizeMixin],
  computed: {
    // sidebar() {
    //   return this.$store.state.app.sidebar
    // },
    // device() {
    //   return this.$store.state.app.device
    // },
    // classObj() {
    //   return {
    //     hideSidebar: !this.sidebar.opened,
    //     openSidebar: this.sidebar.opened,
    //     withoutAnimation: this.sidebar.withoutAnimation,
    //     mobile: this.device === 'mobile'
    //   }
    // }
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
}

.main-container {
  margin-left:200px;
  padding-top:50px;
  box-sizing:border-box;
  height:100%;
}
</style>

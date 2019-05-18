<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="pos-a t0 r0 pt10 pr10">
      <div @click="toggle" class="fa ta-c fa-2x cl-blue cus-pt" :class="[sideBar.isCollapse ? 'fa-toggle-right' : 'fa-toggle-left']"></div>
    </div>
    <div class="pos-r cl-white pl10 h40 mt34">
      <img src="~@/assets/icons/bank.png" class="w40 h40 pos-a">
      <div class="ml40 lh40 pl10 of-hide" v-if="!sideBar.isCollapse">
        您好：张三
      </div>
    </div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="select"
      :collapse="sideBar.isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item :index="nowList.path + '/' + i.path" v-for="(i,index) in nowList.children" :key="index" >
        <i class="el-icon-menu"></i>
        <span slot="title">{{i.meta.title}}</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>
<script>
  export default {
    data() {
      return {
        // isCollapse: true
      };
    },
    computed: {
      sideBar () {
        return this.$store.state.app.sideBar
      },
      nowList () {
        let now = this.$store.state.nav.now
        return this.$store.state.nav.allList[now]
      },
    },
    methods: {
      toggle() {
        this.$store.dispatch("toggleSideBar");
      },
      select(index, indexPath) {
        this.$router.push({path:index})
      }
    }
  }
</script>
<style>
  .scrollbar-wrapper {
    background-color: #304156;
    overflow-x:hidden;
    overflow-y:auto;
    padding-right:20px;
    height: 100%;
  }
</style>

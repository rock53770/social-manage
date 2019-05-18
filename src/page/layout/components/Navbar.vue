<template>
  <div class="navbar-box">
    <!-- <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/> -->
    <div class="navbar">
      <div class="nav h50">
        <!-- <div class="nav-list"> -->
          <ul class="clearfix">
            <li class="fl active" @click="click(index)" v-for="(i,index) in allList" :key="index" v-text="i.meta.title"></li>
          </ul>
        <!-- </div> -->
        <div class="right-menu pr10">
          <i class="fa fa-bell-o ft20" aria-hidden="true"></i>
        </div>
      </div>
      <div>scrollpang</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'
// import ErrorLog from '@/components/ErrorLog'
// import Screenfull from '@/components/Screenfull'
// import SizeSelect from '@/components/SizeSelect'
// import LangSelect from '@/components/LangSelect'
// import ThemePicker from '@/components/ThemePicker'

export default {
  components: {
    // Breadcrumb,
    // Hamburger,
    // ErrorLog,
    // Screenfull,
    // SizeSelect,
    // LangSelect,
    // ThemePicker
  },
  computed: {
    allList () {
      return this.$store.state.nav.allList
    },
    now () {
      return this.$store.state.nav.now
    },
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    click(index) {
      this.$store.dispatch('change',index)
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style lang="less">
.navbar-box{
  height:100px
};
.navbar {
  height: 100px;
  position: fixed;
  top:0;
  left:200px;
  right:0;
  transition: left 0.28s;
  .nav {
    line-height: 50px;
    height: 50px;
    background-color:blue;
    color:white;
    cursor:pointer;
    .nav-list{
      height:50px;
      overflow-x:scroll;
      overflow-y: hidden;
    }
    ul{
      height:50px;
      overflow: hidden
    }
    li{
      float: left;
      box-sizing: border-box;
      padding: 0 10px;
      // &.active{

      // }
    }
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    position:absolute;
    top:0;
    right:0;
    height:50px;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>


<template>
  <div class="ta-c">
    <div class="pt40">
      <el-input v-model="username" placeholder="请输入用户名" class="mt10 w100"></el-input>
    </div>
    <div class="mt20 mb20">
      <el-input v-model="password" placeholder="请输入密码" class="mt10 w100"></el-input>
    </div>

    <el-button type="primary" @click="login" class="mt10">登录</el-button>
  </div>
</template>

<script>
import VerifyCode from "@/components/VerifyCode.vue";
import loginService from "@/api/loginService";
import { Message } from 'element-ui'
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  created() {
  },
  methods: {
    login() {
      if (!this.username) {
        Message.warning("用户名不能为空！");
        return;
      }
      if (!this.password) {
        Message.warning("密码不能为空！");
        return;
      }
      let params = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch('user/login',params).then((res)=>{
        this.$router.push("/doc/index")
      })
    },
  },
  mounted() {
    document.title = "登录";
  },
  beforeDestroy: function() {
  },
  components: {
    verifyCode: VerifyCode
  }
};
</script>

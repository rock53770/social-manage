
<template>
  <div>
    login
  </div>
</template>

<script>
import VerifyCode from "@/components/VerifyCode.vue";
import loginService from "@/api/loginService";
export default {
  name: "login",
  data() {
    return {
      tel: "",
      code: "",
    };
  },
  created() {
  },
  methods: {
    login() {
      if (!this.tel || !this.code) {
        Toast("用户名或验证码不能为空！");
        return;
      }
      let params = {
        username: this.tel,
        code: this.code
      };
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

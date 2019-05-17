<template>
  <div>
    quote
    <div class="fa fa-angle-right"></div>
  </div>
</template>
<script>
import accessService from "@/api/accessService";
export default {
  name: "access",
  data() {
    return {
      loading: false,
      isLogin: false,
      unreadNum: 0,
      bannerList: [],
      count: 1,
      hotgood: [], // 热卖商品
      access: undefined,
      isLogined: false,
    };
  },
  mounted() {
  },
  created() {


    accessService.opencity().then(function(res){
      console.log(res)
    })

    // var a = {a:null}

  },
  methods: {
    quote() {

    },
  },
  components: {
  }
};
</script>
<style lang="less" scope>

</style>


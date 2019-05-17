<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      navHeight:1
    };
  },
  computed: {
  },
  created() {
    // this.changePage();
  },
  mounted() {

  },
  methods: {
    changePage (page) {

    },
    back() {
    }
  }
};
</script>


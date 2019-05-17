<template>
    <div class="">
        layment
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: false,
        }
    },
    props: {
        path: String
    },
    methods:{
        changeTab(path) {
            this.$router.replace(path)
        }
    }
}
</script>
<style lang="less">

</style>

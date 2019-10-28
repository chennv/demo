<template>
<div>
<!--  嵌套路由-->
  <router-link to="/goods/title">Title</router-link>
  <router-link to="/goods/image">Image</router-link>
  <router-view></router-view>
<!--  编程式路由-->
  <div @click="goToGoods">跳转到详情页</div>
</div>
</template>

<script>
    export default {
        name: "GoodsList",
        methods:{
            goToGoods () {
                // this.$router.push('/goods')
                this.$router.push({
                    path: '/goods?goodId=666'
                })
                // this.$router.push({
                //     path: '/goods',
                //     query: {
                //         goodId: 555
                //     }
                // })
            }
        }
    }
</script>

<style scoped>

</style>

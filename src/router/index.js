import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Goods from '@/views/Goods'

Vue.use(Router)

export default new Router({
  // mode:'history',  // 接近原生
  // mode:'hash', // 自动添加#/
  routes: [
    {   // 自动跳转路由
      path: '/',
      redirect: '/goodslist'
    },
    {
      path: '/goodslist',
      name: 'GoodsList',
      component: GoodsList,
      children:[
        {
          path:'title',
          name:'title',
          component:Title
        },
        {
          path:'image',
          name:'image',
          component:Image
        }
      ]
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    }
  ]
})

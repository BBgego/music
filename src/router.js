import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      // children:[
      //   {
      //     path:'recommend',
      //     name:'recommend',
      //     component: () => import(/* webpackChunkName: "recommend" */ './views/Recommend.vue')
      //   },
      //   {
      //     path:'toplist',
      //     name:'toplist',
      //     component: () => import(/* webpackChunkName: "toplist" */ './views/TopList.vue')
      //   },
      //   {
      //     path:'search',
      //     name:'search',
      //     component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
      //   }
      // ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

import {createRouter,createWebHashHistory} from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory,history模式：createWebHistory
  routes: [{
    path: '/',
    component: () => import('@/views/index'),
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: {
        title: '首页',
      },
    }, ]
  }]
})
export default router
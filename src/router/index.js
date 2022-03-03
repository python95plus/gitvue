import Vue from 'vue'
import Router from 'vue-router'
import Layouts from '../layouts'

Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: 'home',
    component: Layouts,
    children: [
      {
        path: '/home',
        meta: {title: '首页', icon: 'el-icon-s-home'},
        component: () => import('../views/home')
      },
      {
        path: 'system',
        meta: { title: '系统管理', icon: 'el-icon-s-home' },
        component: Layouts,
        children: [
          {
            path: 'item1',
            meta: {title: '用户管理', icon: 'el-icon-s-home'},
            component: () => import('../views/system/item1')
          },
          {
            path: 'item2',
            meta: {title: '产品管理', icon: 'el-icon-s-home'},
            component: () => import('../views/system/item2')
          }
        ]

      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  document.title = to.name
  next()
})

export default router
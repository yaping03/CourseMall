import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Course from '@/components/course/course'
import CourseDetailPage1 from '@/components/course/detail/page1'

import Micro from '@/components/micro/micro'
import News from '@/components/news/news'
import NotFound from '@/components/404'

import Login from '@/components/account/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/course',
      name: 'course',
      component: Course,
    },
    {
      path: '/course/detail1/:id/',
      name: 'course-detail1',
      component: CourseDetailPage1
    },
    {
      path: '/micro',
      name: 'micro',
      component: Micro
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
})

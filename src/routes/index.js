import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter({
  // Hash, History
  // https://google.com/#/search
  history: createWebHashHistory(),
  scrollBehavior () {
    return { top: 0 }
  },
  //pages
  // https://google.com/about
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',  // 정규표현식 사용
      component: NotFound
    }
  ]
})
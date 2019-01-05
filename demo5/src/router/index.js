import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutUs from '@/components/AboutUs'
import TicketPage from '@/views/tickets'
import Cart from '@/views/cart'
import Comments from '@/views/comments'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: {
        title: '首页'
      },
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      meta: {
        title: '关于我们'
      },
      component: AboutUs
    },
    {
      path: '/ticket',
      name: 'Ticket',
      meta: {
        title: '车票'
      },
      component: TicketPage
    },
    {
      path: '/cart',
      name: 'Cart',
      meta: {
        title: '购物车'
      },
      component: Cart
    },
    {
      path: '/comments',
      name: 'Comments',
      meta: {
        title: '评论列表'
      },
      component: Comments
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router

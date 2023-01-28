import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    //{ path: '/home', redirect: {name: 'home'}},
    { path: '/',name: 'home', component: HomeView, alias: '/home' },
    { 
      path: '/sesion', 
      component: () => import('../views/SesionView.vue'),
      children: [
        { 
          path: '',
          component: {
            default: () => import('../views/LoginView.vue'),
            register: () => import('../views/SesionView.vue'),
          }
        }
      ]
    },
    { path: '/about',name: 'about', component: () => import('../views/AboutView.vue') },
    { 
      path: '/chats', 
      component: () => import('../views/ChatsView.vue'), 
      children: [
      { 
        path: ':chatId', 
        component: () => import('../views/ChatView.vue'),
        props:  (router) => {
          return {
            chatId: router.params.chatId
          }
        }
      }
    ]
  }
]
})

export default router
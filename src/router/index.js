import Vue from 'vue'
import VueRouter from 'vue-router'
import BaseForm from '@/views/BaseForm.vue';
import LoginForm from '@/components/Login/LoginForm.vue';
import RegisterForm from '@/components/Register/RegisterForm.vue';
import PersonalArea from '@/views/PersonalArea.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: BaseForm,
    children: [
      {
        path: 'sign-in',
        name: 'auth',
        component: LoginForm,
      },
      {
        path: 'sign-up',
        name: 'register',
        component: RegisterForm,
      }
    ]
  },
  {
    path: '/home',
    name: 'personal',
    component: PersonalArea,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

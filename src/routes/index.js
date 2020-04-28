import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Chatting from '../views/Chatting.vue'


Vue.use(VueRouter);


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name:'Login',
            component: Login
        },
        {
            path: '/Chatting',
            name: Chatting,
            component: Chatting
        }
    ]
});


export default router
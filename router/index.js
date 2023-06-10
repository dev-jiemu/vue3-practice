import {createWebHistory, createRouter} from "vue-router";

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/App.vue')
    },
    {
        path: '/hello',
        component: () => import('@/components/HelloWorld.vue')
    },
    {
        path: '/mail_send',
        component: () => import('@/components/MailSend.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});





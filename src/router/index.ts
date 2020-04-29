import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        // children: [
        //     {
        //         path: '/:article',
        //         name: '',
        //         component: () => import('@/views/Article.vue')
        //     },
        //     {
        //         path: '/tags/:tag',
        //         name: 'Tag',
        //         // component:()
        //     }
        // ]
    },
    {
        path: '/new',
        name: 'Create',
        component: () => import('@/views/Create.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue')
    },
    {
        path: '/@:username',
        name: 'Profile',
        component: () => import('@/views/Profile.vue'),
        children: [
            {
                path: '',
                name: ''
            },
            {
                path: '/favorite',
                name: '',
                // component:()=>import
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: () => import('@/views/SignUp.vue')
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router

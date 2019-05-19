import Vue from 'vue';
import Router from 'vue-router';
import Home from  './views/home';
import Choice from './views/choice/choice'
import Introduction from './views/introduction'
import Main from './views/main'
import Secondary from './views/secondary'
import Fashion from './views/choice/fashion'
import Tech from './views/choice/tech'
import Reliable from './views/choice/reliable'

Vue.use(Router);

export default new Router({
    model:'history',
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/choice',
            name:'choice',
            component:Choice
        },
        {
            path:'/introduction',
            name:'introduction',
            component: Introduction
        },
        {
            path:'/main',
            name:'main',
            component:Main
        },
        {
            path:'/secondary',
            name:'secondary',
            component:Secondary
        },
        {
            path:'/fashion',
            name:'fashion',
            component:Fashion
        },
        {
            path:'/tech',
            name:'tech',
            component:Tech
        },
        {
            path:'/reliable',
            name:'reliable',
            component:Reliable
        }

    ]
})

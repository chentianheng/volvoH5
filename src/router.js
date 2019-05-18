import Vue from 'vue';
import Router from 'vue-router';
import Home from  './views/home';

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
        }
    ]
})
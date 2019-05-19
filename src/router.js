import Vue from 'vue';
import Router from 'vue-router';
import Home from  './views/home';
import Choice from './views/choice'

Vue.use(Router);

export default new Router({
    model:'history',
    routes:[
        {
            path:'/',
            redirect:'/choice'
        },
        {
            path:'/choice',
            name:'choice',
            component:Choice
        }
    ]
})

import Vue from "vue";
import Router from "vue-router";
import Home from './components/Home.vue';
import Menu from './components/template/Menu.vue';

const User = () => import('./components/user/User.vue');
const UserList = () => import('./components/user/UserList.vue');
const UserDetails = () => import('./components/user/UserDetails.vue');
const UserEdit = () => import('./components/user/UserEdit.vue');

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'start',
        components: {
            default: Home,
            menu: Menu
        }
    }, {
        path: '/user',
        components: {
            default: User,
            menu: Menu
        },
        props: true,
        children: [
            { path: '', component: UserList, name: 'list' },
            { path: ':id', component: UserDetails, props: true, name: 'details' },
            { path: ':id/edit', component: UserEdit, props: true, name: 'editUser' },
        ]
    }, {
        path: '*',
        redirect: '/'
    }]
})
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import PostList from '../views/PostList.vue';
import PostListGrid from '../views/PostListGrid.vue';
import { board } from '../util/axios';
import store from '../store/index';

Vue.use(VueRouter);

const fetchData = (to, from, next) => {
    store.commit('SET_LOADING', true);
    const item = sessionStorage.getItem('postCount');
    let count = item ? Number(item) : 8;
    board.fetchList(0, count).then((res) => {
        store.commit('SET_LOADING', false);
    });
    sessionStorage.setItem('postCount', count);
    next();
};

const routes = [{
        path: '/',
        name: 'Home',
        component: PostList,
        beforeEnter: fetchData,
    },
    {
        path: '/grid',
        name: 'grid',
        component: PostListGrid,
        beforeEnter: fetchData,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

// router.beforeEach((to, from, next) => {
//     // ${//to and from are Route Object,next() must be called to resolve the hook}
//     store.commit('SET_LOADING', true);
//     // console.log('hello');
//     next();
// });

export default router;
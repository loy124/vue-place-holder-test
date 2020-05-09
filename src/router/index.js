import Vue from 'vue';
import VueRouter from 'vue-router';
import PostList from '../views/PostList.vue';
import ListDetail from '../views/ListDetail.vue';

import { board } from '../util/axios';
import store from '../store/index';

Vue.use(VueRouter);

const fetchData = (to, from, next) => {
    //로딩 활성화
    store.commit('SET_LOADING', true);
    //세션에서 post의 갯수를 가져온다
    const item = sessionStorage.getItem('postCount');
    let count = item ? Number(item) : 8;
    //axios 모듈의 값을 가져오고 성공하면 loading Spinner 제거
    board.fetchList(0, count).then((res) => {
        store.commit('SET_LOADING', false);
    });
    //sessuib에 갯수 저장
    sessionStorage.setItem('postCount', count);
    next();
};

const routes = [{
        path: '/',
        name: 'Main',
        component: PostList,
        beforeEnter: fetchData,
    },
    {
        path: '/list/:postId',
        name: 'detail',
        component: ListDetail,
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
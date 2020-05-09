import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        loading: false,
        gridView: sessionStorage.getItem('gridView') === 'true' ? true : false,
        select8: sessionStorage.getItem('select8') ?
            JSON.parse(sessionStorage.getItem('select8')) :
            true,
        select16: sessionStorage.getItem('select16') ?
            JSON.parse(sessionStorage.getItem('select16')) :
            false,
        list: [],
        listDetail: '',
    },
    mutations: {
        SET_LOADING(state, data) {
            state.loading = data;
        },
        SET_GRID_VIEW(state, data) {
            state.gridView = data;
            sessionStorage.setItem('gridView', data);
        },
        SET_SELECT8(state, data) {
            state.select8 = data;
            //새로고침해도 값을 갱신하기위해 세션에 저장
            sessionStorage.setItem('select8', JSON.stringify(state.select8));
        },
        SET_SELECT16(state, data) {
            state.select16 = data;
            sessionStorage.setItem('select16', JSON.stringify(state.select16));
        },
        SET_LIST(state, data) {
            state.list = data;
        },
        SET_LIST_DETAIL(state, data) {
            state.listDetail = data;
        },
    },
    actions: {},
    modules: {},
});
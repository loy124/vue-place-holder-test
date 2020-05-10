import axios from 'axios';
import store from '../store/index';

const DOMAIN = 'https://jsonplaceholder.typicode.com/';

const request = (method, url, data) => {
    return axios({
            method: method,
            url: DOMAIN + url,
            params: data,
        })
        .then((res) => res.data)
        .catch((error) => console.log(error));
};
const imageLists = [
    { image: 'https://via.placeholder.com/150/771796' },
    { image: 'https://via.placeholder.com/150/92c952' },
    { image: 'https://via.placeholder.com/150/56a8c0' },
];

const randomNumber = () => Math.floor(Math.random() * imageLists.length);

export const board = {
    fetchList(start = 0, limit = 8) {
        store.commit('SET_LOADING', true);
        return request('get', 'posts', { _start: start, _limit: limit }).then(
            async(res) => {
                //게시글들을 출력하고
                //배열안의 아이디들을 기반으로 userId === id 일떄 배열을 넣어준다
                const datas = await request('get', 'users');
                const list = res.map((li) => {
                    datas.forEach((data) => {
                        if (li.userId === data.id) {
                            li['name'] = data.name;
                            //랜덤으로 포스터를 넣어줄 랜덤 변수 생성
                            li['image'] = imageLists[randomNumber()].image;
                        }
                    });
                    return li;
                });
                store.commit('SET_LOADING', false);
                store.commit('SET_LIST', list);
                // console.log(list);
                return list;
            },
        );
    },
    fetchDetail(id) {
        store.commit('SET_LOADING', true);
        return request('get', 'posts', { id: id }).then(async(res) => {
            const comments = await request('get', 'comments', { postId: id });
            res[0]['comments'] = comments;
            res[0]['image'] = imageLists[randomNumber()].image;
            store.commit('SET_LOADING', false);
            store.commit('SET_LIST_DETAIL', res[0]);

            return res[0];
        });
    },
};
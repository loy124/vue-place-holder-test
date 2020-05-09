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
                            const imageLists = [
                                { image: 'https://via.placeholder.com/150/771796' },
                                { image: 'https://via.placeholder.com/150/92c952' },
                                { image: 'https://via.placeholder.com/150/56a8c0' },
                            ];
                            const randomNumber = Math.floor(
                                Math.random() * imageLists.length,
                            );

                            li['image'] = imageLists[randomNumber].image;
                        }
                    });
                    return li;
                });
                store.commit('SET_LOADING', false);
                store.commit('SET_LIST', list);
                console.log(list);
                return list;
            },
        );
    },
};
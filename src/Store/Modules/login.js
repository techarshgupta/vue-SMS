import Vue from 'vue';
import router from '../../routes.js';

const login = {
    namespaced: true,
    state: {
        token: null,
    },
    getters: {

    },
    mutations: {

    },
    actions: {
         signIn({commit}, payload) {
            Vue.http.post(http://schoolspedia.com:7070/oauth2/authorization/google)
                .then(response => response.json())
                console.log(response)
        },
    }
}

export default login;
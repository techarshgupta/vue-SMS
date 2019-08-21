import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import login from './Modules/login.js'

export default new Vuex.Store({
    modules:{
        login,
    }
})
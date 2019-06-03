'use strict';

import Vue from 'vue';
import App from '@/App.vue';
import { store } from '@/store/store';
import VueRouter from 'vue-router';
import router from '@/router';

Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    store,
    router,
}).$mount('#app');

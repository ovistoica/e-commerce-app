'use strict';

import Vue from 'vue';
import Router from 'vue-router';
import AddProduct from '@/views/AddProduct.vue';
import ProductList from '@/views/ProductList.vue';
import SingleProduct from '@/views/SingleProduct.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/products',
            name: 'products',
            component: ProductList
        },
        {
            path: '/product/:slug',
            name: 'product',
            component: SingleProduct
        },
        {
            path: '/add-product',
            name: 'add-product',
            component: AddProduct
        },

    ]
});
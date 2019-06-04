import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

const vuexLocalStorage = new VuexPersist({
    key: 'ecommerce',
    storage: window.localStorage
});

Vue.use(Vuex);
const slugify = str => {
    str = str || '';
    const a =
        'àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;άαβγδεέζήηθιίϊΐκλμνξοόπρσςτυϋύΰφχψωώ';
    const b =
        'aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------aavgdeeziitiiiiklmnxooprsstyyyyfhpoo';
    const p = new RegExp(a.split('').join('|'), 'g');

    return str
        .toString()
        .trim()
        .toLowerCase()
        .replace(/ου/g, 'ou')
        .replace(/ευ/g, 'eu')
        .replace(/θ/g, 'th')
        .replace(/ψ/g, 'ps')
        .replace(/\//g, '-')
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
        .replace(/&/g, '-and-') // Replace & with 'and'
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, ''); // Trim - from end of text
};


export const store = new Vuex.Store({
    plugins: [ vuexLocalStorage.plugin ],
    state: {
        products: [],
        cart: []
    },
    mutations: {
        addProduct (state, product) {
            product.slug = slugify(product.name);
            state.products.push(product);
        },
        deleteProduct (state, index) {
            state.products = state.products
                .slice(0,index)
                .concat(state.products.slice(index + 1, state.products.length));
        },
        addToCart (state, newItem) {
            const index = state.cart.findIndex(
                itemInCart => itemInCart.product.slug === newItem.product.slug
            );

            if (index === -1) {
                //not existing
                state.cart = [ ...state.cart, newItem ];
            } else {
                newItem.quantity += state.cart[index].quantity;
                state.cart = state.cart
                    .filter(item => item.product.slug !== newItem.product.slug)
                    .concat(newItem);
            }
        }

    }, 
    getters: {
        products: state => state.products,
        cart: state => state.cart
    },
});
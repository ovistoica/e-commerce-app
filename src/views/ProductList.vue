<template>
    <div class="product-list">
        <div v-for="(product, index) in $store.getters.products"
             :key="index"
        >
            <img :src="product.imageUrl">
            <h2>{{ product.name }}</h2>
            <p class="description">
                {{ product.description }}
            </p>
            <p class="price">
                {{ product.price }}
            </p>
        </div>
    </div>
</template>

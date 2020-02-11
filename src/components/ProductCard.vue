<template>
  <div class="product-card-container">
    <div>{{ product.name }}</div>
    <img :src="product.hero.href" :alt="product.name" class="product-hero-img"/>
    <div class="product-card-price-range">{{ product.priceRange.selling.low }} - {{ product.priceRange.selling.high }}</div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  }
};
</script>

<style scoped>
</style>
<template>
  <!-- @click on the product card to display carousel-->
  <div class="product-card" @click="renderCarousel">
    <div>{{ product.name }}</div>
    <img :src="product.hero.href" :alt="product.name" class="product-hero-img" />
    <div
      class="product-card-price-range"
    >{{ product.priceRange.selling.low }} - {{ product.priceRange.selling.high }}</div>
  </div>
</template>

<script>

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  data() {
    return { displayCarousel: false };
  },
  methods: {
    renderCarousel() {
      this.$emit("renderCarousel", this.product.images)
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  max-height: 100%;
}

.product-card {
  margin: 1rem;
  background-color: lightpink;
}

@media (min-width: 768px) {
  .product-card {
    margin: 2rem;
    width: 24%;
  }
}

@media (min-width: 1024px) {
  .product-card {
    width: 26%;
  }
}
</style>
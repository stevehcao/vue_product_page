<template>
  <!-- @click on the product card to display carousel-->
  <!-- .self on the product-card could prevent bubbling -->
  <div class="product-card" @click.self="toggleCarousel">
    <Carousel v-if="displayCarousel" :productImages="product.images"/>
    <div>{{ product.name }}</div>
    <img :src="product.hero.href" :alt="product.name" class="product-hero-img" />
    <div
      class="product-card-price-range"
    >{{ product.priceRange.selling.low }} - {{ product.priceRange.selling.high }}</div>
  </div>
</template>

<script>
import Carousel from './Carousel';

export default {
  name: 'ProductCard',
  components: { Carousel },
  props: {
    product: Object
  },
  data() {
    return { displayCarousel: false };
  },
  methods: {
    toggleCarousel(evt) {
      this.displayCarousel = !this.displayCarousel;
      console.log("toggle event on product card", evt.target)
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
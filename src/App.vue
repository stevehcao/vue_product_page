<template>
  <div id="app">
    <div class="product-card-container">
      <ProductCard
        v-for="product in allNewProducts.groups"
        :key="product.id"
        :product="product"
        @renderCarousel="updateProductImages($event)"
      />
      <transition name="fade">
        <Carousel v-if="displayCarousel" :productImages="productImages" @closeCarousel="closeCarousel"/>
      </transition>
    </div>
  </div>
</template>

<script>
import productsObj from './products-resource';
import ProductCard from './components/ProductCard';
import Carousel from './components/Carousel';

export default {
  name: 'App',
  components: {
    ProductCard,
    Carousel
  },
  data() {
    return {
      allNewProducts: productsObj,
      displayCarousel: false,
      productImages: []
    };
  },
  // have method that would listen for the child click
  methods: {
    updateProductImages(updatedProductImages) {
      this.productImages = updatedProductImages;
      this.displayCarousel = !this.displayCarousel;
    },
    closeCarousel() {
      this.displayCarousel = false;
    }
  }
};
</script>

<style>
/* for google chrome */
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}

@media (min-width: 480px) {
  .product-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<template>
  <div id="app">
    <div class="product-card-container">
      <ProductCard
        v-for="product in allNewProducts.groups"
        :key="product.id"
        :product="product"
        :id="product.id"
        @renderCarousel="updateProductImages($event, product.id)"
      />
      <transition name="fade">
        <Carousel
          v-if="displayCarousel"
          :productImages="productImages"
          @closeCarousel="closeCarousel"
        />
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
      productImages: [],
      productId: ''
    };
  },
  methods: {
    updateProductImages(updatedProductImages, productId) {
      this.productImages = updatedProductImages;
      this.displayCarousel = !this.displayCarousel;
      this.productId = productId;
    },
    closeCarousel() {
      let productCardElement = document.querySelector(`#${this.productId}`);
      let productCardPosition = productCardElement.getBoundingClientRect().top;
      window.scrollTo(0, productCardPosition);
      this.displayCarousel = false;
    }
  }
};
</script>

<style>
html {
  scroll-behavior: smooth;
}

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
  position: relative;
}

@media (min-width: 480px) {
  .product-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

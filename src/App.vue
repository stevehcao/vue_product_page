<template>
  <main id="app">
    <header>
      <!-- a tag with image -->
      <a
        href="https://www.westelm.com/?cm_type=gnav&cm_sp=GlobalLinks-_-Topnav-_-WestElmLogo"
        alt="west elm"
        class="header-anchor"
      >
        <img class="header-img" src="https://logos-download.com/wp-content/uploads/2016/06/West_Elm_logo.png" alt="west elm" />
      </a>
    </header>
    <section class="product-card-container">
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
    </section>
  </main>
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

header {
  padding: 25px 0;
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

.header-img {
  width: 65%;
}

@media (min-width: 480px) {
  .product-card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .header-img {
    width: 30%;
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

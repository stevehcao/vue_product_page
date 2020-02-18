<template>
  <!-- @click on the product card to display carousel-->
  <div class="product-card">
    <div class="product-name">{{ trimmedProductName }}</div>
    <img :src="product.hero.href" :alt="trimmedProductName" class="product-hero-img" @click="renderCarousel" />
    <div
      class="product-card-price-range"
    >${{ product.priceRange.selling.low }} - {{ product.priceRange.selling.high }}</div>
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
      this.$emit('renderCarousel', this.product.images);
      window.scrollTo(0,0);
    }
  },
  computed: {
    // some product name had an & and other in the name and needed to be trimmed at the time
    trimmedProductName: function() {
      let productName = this.product.name
      let endIndex = productName.indexOf("&") > 0 ? productName.indexOf("&") : productName.length
      return productName.substring(0, endIndex);
    }
  }
};
</script>

<style scoped>
.product-hero-img {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
}

.product-card {
  margin: 1rem;
  position: relative;
  /* possible center it with flexbox */
  display: flex;
  justify-content: center;
}

.product-name {
  position: absolute;
  background-color: #ffffff;
  opacity: 0.5;
  font-weight: bold;
  width: 100%;
}

.product-card-price-range {
  position: absolute;
  left: 8%;
  bottom: 12%;
  background: black;
  font-weight: bold;
  color: #ffffff;
  opacity: 0.7;
  padding: 4px;
}

@media (min-width: 768px) {
  .product-card {
    margin: 2rem;
    width: 24%;
  }
}

@media (min-width: 1024px) {
  .product-card {
    width: 25%;
  }
}
@media (min-width: 1440px) {
  .product-card {
    width: 25%;
  }

  .product-name {
    width: 363px;
  }
}

@media (min-width: 1700px) {
  .product-card-price-range {
    left: 14%;
  }
}

@media (min-width: 1900px) {
  .product-card-price-range {
    left: 19%;
  }
}

@media (min-width: 2100px) {
  .product-card-price-range {
    left: 24%;
  }
}
</style>
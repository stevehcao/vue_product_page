<template>
  <div id="app">
    <ProductCard v-for="product in allNewProducts.groups" :key="product.id" :product="product" />
  </div>
</template>

<script>
import productsObj from './products-resource';
import ProductCard from './components/ProductCard';

export default {
  name: 'App',
  components: {
    ProductCard
  },
  data() {
    return {
      allNewProducts: productsObj
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <restaurant-screen></restaurant-screen>
  </div>
</template>

<script>
import RestaurantScreen from './components/RestaurantScreen.vue';
export default {
  components: {RestaurantScreen},
  name: 'App',
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

<template>
  <div>
    <h1>Restaurants</h1>
    <restaurant-list></restaurant-list>
  </div>
</template>

<script>
import RestaurantList from './RestaurantList.vue';
export default {
  components: {RestaurantList},
  name: 'RestaurantScreen',
};
</script>

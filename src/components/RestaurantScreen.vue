<template>
  <v-card>
    <v-card-title>Restaurants</v-card-title>
    <v-card-text>
      <restaurant-list></restaurant-list>
    </v-card-text>
  </v-card>
</template>

<script>
import RestaurantList from './RestaurantList.vue';
export default {
  components: {RestaurantList},
  name: 'RestaurantScreen',
};
</script>

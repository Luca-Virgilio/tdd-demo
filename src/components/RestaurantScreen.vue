<template>
  <v-card>
    <v-card-title>Restaurants</v-card-title>
    <v-card-text>
      <new-restaurant-form></new-restaurant-form>
      <restaurant-list></restaurant-list>
    </v-card-text>
  </v-card>
</template>

<script>
import NewRestaurantForm from './NewRestaurantForm.vue';
import RestaurantList from './RestaurantList.vue';
export default {
  components: {RestaurantList, NewRestaurantForm},
  name: 'RestaurantScreen',
};
</script>

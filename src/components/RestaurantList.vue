<template>
  <ul>
    <li
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      data-testid="restaurant"
    >
      {{ restaurant.name }}
    </li>
  </ul>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: 'RestaurantList',
  computed: {
    ...mapState('restaurants', {restaurants: 'records'}),
  },
  methods: {
    ...mapActions('restaurants', {loadRestaurants: 'load'}),
  },
  mounted() {
    this.loadRestaurants();
  },
};
</script>

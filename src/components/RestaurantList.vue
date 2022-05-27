<template>
  <div>
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
      data-testid="loading-indicator"
    ></v-progress-circular>
    <v-list-item
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      data-testid="restaurant"
    >
      <v-list-item-content>
        <v-list-item-title>
          {{ restaurant.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
  name: 'RestaurantList',
  computed: {
    ...mapState('restaurants', {restaurants: 'records', loading: 'loading'}),
  },
  methods: {
    ...mapActions('restaurants', {loadRestaurants: 'load'}),
  },
  mounted() {
    this.loadRestaurants();
  },
};
</script>

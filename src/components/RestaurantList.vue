<template>
  <div>RestaurantList</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'RestaurantList',
  methods: {
    ...mapActions('restaurants',['load']),
  },
  mounted(){
    this.load();
  }
};
</script>

const restaurants = api => ({
  namespaced: true,
  state: {
    records: [],
    loading: false,
  },
  mutations: {
    storeRecords(state, records) {
      state.records = records;
      state.loading = false;
    },
    startLoading(state) {
      state.loading = true;
    },
  },
  actions: {
    load(store) {
      store.commit('startLoading');
      api.loadRestaurants().then(records => {
        store.commit('storeRecords', records);
      });
    },
  },
});

export default restaurants;

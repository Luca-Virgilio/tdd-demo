const restaurants = (api) => ({
  namespaced: true,
  state: {
    records: [],
  },
  mutations: {
    storeRecords(state, records) {
      state.records = records;
    }
  },
  actions: {
    load(store) {
      api.loadRestaurants().then(records => {
        store.commit('storeRecords', records);
      })
    },
  }
});

export default restaurants;

const restaurants = (api, stateOverrides) => ({
  namespaced: true,
  state: {
    records: [],
    loading: false,
    loadError: false,
    ...stateOverrides,
  },
  mutations: {
    storeRecords(state, records) {
      state.records = records;
      state.loading = false;
    },
    startLoading(state) {
      state.loading = true;
      state.loadError = false;
    },
    recordLoadingError(state) {
      state.loading = false;
      state.loadError = true;
    },
    addRecord(state, record) {
      state.records.push(record);
    },
  },
  actions: {
    load(store) {
      store.commit('startLoading');
      api
        .loadRestaurants()
        .then(records => {
          store.commit('storeRecords', records);
        })
        .catch(() => store.commit('recordLoadingError'));
    },
    create({commit}, newRestaurantName) {
      api.createRestaurant(newRestaurantName).then(res => {
        commit('addRecord', res);
      });
    },
  },
});

export default restaurants;

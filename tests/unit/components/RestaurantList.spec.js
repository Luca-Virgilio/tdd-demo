import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { mount, createLocalVue } from '@vue/test-utils';
import RestaurantList from '@/components/RestaurantList';
import Vue from 'vue';

const findByTestId = (wrapper, testId, index) =>
  wrapper.findAll(`[data-testid="${testId}"]`).at(index);

describe('RestaurantList', () => {
  Vue.use(Vuetify);

  const vuetify = new Vuetify();
  const localVue = createLocalVue();
  localVue.use(Vuex);

  const records = [
    { id: 1, name: 'Sushi Place' },
    { id: 2, name: 'Pizza Place' },
  ];

  let restaurantsModule;
  let wrapper;

  const mountWithStore = (state = { records }) => {
    restaurantsModule = {
      namespaced: true,
      state: state,
      actions: {
        load: jest.fn().mockName('load'),
      },
    };
    const store = new Vuex.Store({
      modules: {
        restaurants: restaurantsModule,
      },
    });

    wrapper = mount(RestaurantList, { localVue, store, vuetify });
  };

  it('loads restaurants on mount', () => {
    mountWithStore();
    expect(restaurantsModule.actions.load).toHaveBeenCalled();
  });

  it('displays the loading indicator while loading', () => {
    mountWithStore({ loading: true });
    expect(wrapper.find('[data-testid="loading-indicator"]').exists()).toBe(
      true,
    );
  });

  describe('when loading succeeds', () => {
    beforeEach(() => {
      mountWithStore({ records, loading: false });
    });
    it('does not display the loading indicator while not loading', () => {
      expect(wrapper.find('[data-testid="loading-indicator"]').exists()).toBe(
        false,
      );
    });
    it('displays the restaurants', () => {
      expect(findByTestId(wrapper, 'restaurant', 0).text()).toBe('Sushi Place');
      expect(findByTestId(wrapper, 'restaurant', 1).text()).toBe('Pizza Place');
    });
  });

});

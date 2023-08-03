import { createStore } from 'vuex';

const store = createStore({
  modules: {
    // Use dynamic import to load modules
    async app() {
      const module = await import('./modules/app.js');
      return module.default;
    },
  },
  getters: {
    baseUrl: state => state.app.baseUrl
  },
});

export default store;

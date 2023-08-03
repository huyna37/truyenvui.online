const state = {
  isLoading: false,
  titleCurrent: "",
  env: process.env.NODE_ENV,
  isMobileDevice: false,
  isNavOpen: false,
  currentPath: ''
};

const mutations = {
  SET_CURRENTPATH: (state, val) => {
    state.currentPath = val;
  },
  SET_NavOpen: (state, val) => {
    state.isNavOpen = val;
  },
  SET_AUTH: (state, val) => {
    state.isAuth = val;
  },
  SET_ROLES: (state, val) => {
    state.roles = val;
  },
  SET_USER: (state, val) => {
    state.user = val;
  },
  SET_LOADING: (state, val) => {
    state.isLoading = val;
  },
  SET_TITLECURRENT: (state, val) => {
    state.titleCurrent = val;
  },
  SET_ISMOBILEDEVICE: (state, val) => {
    state.isMobileDevice = val;
  },
};

const actions = {
  setCurrentPath({ commit }, val) {
    commit("SET_CURRENTPATH", val);
  },
  setNavOpen({ commit }, val) {
    commit("SET_NavOpen", val);
  },
  setAuth({ commit }, val) {
    commit("SET_AUTH", val);
  },
  setRoles({ commit }, val) {
    commit("SET_ROLES", val);
  },
  setIsLoading({ commit }, val) {
    commit("SET_LOADING", val);
  },
  setTitleCurrent({commit}, val) {
    commit("SET_TITLECURRENT", val);
  },
  setIsMobileDevice({commit}, val) {
    commit("SET_ISMOBILEDEVICE", val);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
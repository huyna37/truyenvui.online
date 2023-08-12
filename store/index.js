// store/main.ts

import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', () => {
  const loading = ref(false);
  const isNavOpen = ref(false);
  const currentPath = ref('');

  function setLoading(value) {
    loading.value = value;
  }

  function setNavOpen(value) {
    isNavOpen.value = value;
  }

  return { loading, setLoading, isNavOpen, currentPath, setNavOpen };
});

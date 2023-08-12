export const useMainStore = defineStore('main', () => {
  let loading = ref(false);
  let isNavOpen = ref(false);
  let currentPath = ref('');
  function setLoading(value) {
    loading = value;
  }
  function setNavOpen(value) {
    isNavOpen = value;
  }
  return { loading, setLoading, isNavOpen, currentPath, setNavOpen };
}
)
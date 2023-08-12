export const useMainStore = defineStore('main', () => {
  const loading = ref(false);
  const isNavOpen = ref(false);
  const currentPath = ref('');

  function setLoading(value) {
    loading.value = value; // Update the value property of the ref
  }

  function setNavOpen(value) {
    isNavOpen.value = value;
    console.log(isNavOpen.value); // Log the current value of isNavOpen
  }
  

  return { loading: loading.value, setLoading, isNavOpen: isNavOpen.value, currentPath, setNavOpen };
});

import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  let loading = ref(false);
  function setLoading(value) {
    loading = value;
  }
  return { loading, setLoading };
}
)
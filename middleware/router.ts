import { useMainStore } from '@/store'
export default defineNuxtRouteMiddleware((to, from) => {
    const mainStore = useMainStore();
    mainStore.setLoading(true);
})

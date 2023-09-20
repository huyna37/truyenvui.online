<template>
  <Loading v-if="mainStore.loading" v-model:active="mainStore.loading" :can-cancel="true" :is-full-page="true" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
const mainStore = useMainStore();
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

const scriptSrc = 'https://inklinkor.com/tag.min.js';
const scriptZone = 6356696;

onMounted(() => {
  const scriptElement = document.createElement('script');
    scriptElement.src = scriptSrc;
    scriptElement.setAttribute('data-zone', scriptZone.toString());
    document.body.appendChild(scriptElement);
});
</script>

<style>
.active-link {
  color: red !important
}

.scrollbar::-webkit-scrollbar {
  width: 0.5rem;
  /* Chiều rộng của thanh cuộn */
}

.scrollbar::-webkit-scrollbar-thumb {
  background-color: #e2e8f0;
  /* Màu của thanh cuộn */
  border-radius: 0.25rem;
  /* Đường viền cong của thanh cuộn */
}

.scrollbar::-webkit-scrollbar-track {
  background-color: transparent;
  /* Màu của vùng bên trong thanh cuộn */
}
</style>
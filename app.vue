<template>
  <Loading v-show="mainStore.loading" v-model:active="mainStore.loading" :can-cancel="true" :is-full-page="true" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
const mainStore = useMainStore();
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

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
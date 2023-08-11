<template>
  <div v-show="isLoading">
        Loading...
    </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
const mainStore = useMainStore();
const { isLoading } = mainStore;

</script>

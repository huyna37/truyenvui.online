<template>
  <div v-show="loading">
        Loading...
    </div>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';
const mainStore = useMainStore();
const { loading } = mainStore;

</script>

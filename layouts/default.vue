<template>
    <div>
        <!-- <Navbar /> -->
        <Header />
        <div class="container">
            <slot />
            <a href="#scroll" class="tw-fixed tw-right-[2%] tw-bottom-[10%] tw-text-[23px] tw-text-[rebeccapurple]">
                <i :class="{ 'fa-circle-arrow-up': isScrolledToBottom, 'fa-circle-arrow-down': !isScrolledToBottom }"></i>
            </a>
        </div>
        <Footer />
    </div>
</template>
  
<script setup lang="ts">
import Footer from '@/components/layouts/main/Footer.vue';
import Header from '@/components/layouts/main/Header.vue';
let isScrolledToBottom = false;

function handleScroll() {
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
        isScrolledToBottom = false;
        return;
    }
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    isScrolledToBottom = scrollPosition + windowHeight >= documentHeight;
}
</script>
  
<style></style>
  
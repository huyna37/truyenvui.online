<template>
    <div>
        <!-- <Navbar /> -->
        <Header />
        <div class="container">
            <slot />
            <a href="#scroll" class="tw-fixed tw-right-[2%] tw-bottom-[10%] tw-text-[23px] tw-text-[rebeccapurple]">
                <i class="fa-solid" :class="{ 'fa-circle-arrow-up': isScrolledToBottom, 'fa-circle-arrow-down': !isScrolledToBottom }"></i>
            </a>
        </div>
        <Footer />
    </div>
</template>
  
<script setup lang="ts">
import Footer from '@/components/layouts/main/Footer.vue';
import Header from '@/components/layouts/main/Header.vue';
let isScrolledToBottom = ref(false);

onMounted(()=> {
    window.addEventListener('scroll', handleScroll);
})


function handleScroll() {
    if(isScrolledToBottom.value) {
        window.scrollTo(0, 0);
    }
    const scrollPosition = window.scrollY;
    if (scrollPosition === 0) {
        isScrolledToBottom.value = false;
        return;
    }
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    isScrolledToBottom.value = scrollPosition + windowHeight >= documentHeight;
}
</script>
  
<style></style>
  
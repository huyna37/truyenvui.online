<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary tw-shadow tw-bg-white">
    <div class="container">
      <NuxtLink
        class="navbar-brand tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-red-500 tw-to-violet-500 tw-dark:from-red-500 tw-dark:to-teal-600 tw-text-[22px]"
        to="/">TRUYENVUI.ONLINE</NuxtLink>
      <button class="navbar-toggler" type="button" @click="toggleNav()" aria-controls="navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ 'tw-block': mainStore.isNavOpen }" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink class="nav-link" @click="toggleNav()" to="/danh-sach">Danh Sách</NuxtLink>
          </li>
          <li class="nav-item tw-relative list-category tw-cursor-pointer">
            <span class="nav-link" :class="{ 'active-link': isActiveCategory }">Thể Loại</span>
            <div
              class="menu-category tw-absolute tw-z-[2] tw-p-[15px] tw-rounded-lg tw-w-[25rem] tw-left-[15%] max-md:tw-left-[-5%] max-md:tw-top-[8%]">
              <ul
                class="tw-navbar-item-sub tw-overflow-hidden tw-mt-[10px] tw-ml-[32px] dark:tw-shadow-slate-700 dark:tw-shadow dark:tw-shadow-slate-700 tw-text-[13px] tw-font-light tw-ml-0 tw-p-[10px] tw-rounded-bl-2xl tw-rounded-br-2xl tw-bg-white tw-w-full tw-shadow-lg tw-absolute tw-bg-white dark:tw-bg-slate-800 tw-text-[14px] tw-flex tw-gap-2 lg:tw-gap-8 lg:tw-text-[14px] h-0 tw-transition-all tw-duration-300 tw-text-black dark:tw-text-teal-600">
                <div class="menu-genre tw-grid tw-grid-cols-2 tw-gap-y-2 tw-grid tw-grid-cols-4 tw-gap-x-1">
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=action">
                      Action</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=comedy">
                      Comedy</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=sports">
                      Sports</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=xuyen-khong">Xuyên Không</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=doujinshi">Doujinshi</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=adventure">Adventure</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=horror">
                      Horror</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=school-life">School Life</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=shoujo">
                      Shoujo</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=shoujo-ai">Shoujo Ai</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=drama">
                      Drama</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=shounen">Shounen</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=shounen-ai">Shounen Ai</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=romance">Romance</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=magic">
                      Magic</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=psychological">Psychological</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=harem">
                      Harem</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=mystery">Mystery</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=fantasy">Fantasy</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=webtoon">Webtoon</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=reincarnatd">Reincarnated</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=gender-bender">Gender Bender</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=trinh-tham">Trinh Thám</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=cooking">Cooking</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=yaoi">
                      Yaoi</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=mature">
                      Mature</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=one-shot">One
                      Shot</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=slice-of-life">Slice of Life</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=historical">Historical</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=yuri">
                      Yuri</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=ecchi">
                      Ecchi</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=supernature">Supernature</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=martial-arts">Martial Arts</NuxtLink>
                  </li>
                  <li>
                    <NuxtLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " @click="toggleNav()"
                      to="/danh-sach?category=gourmet">Gourmet</NuxtLink>
                  </li>
                </div>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" @click="toggleNav()" to="/top-anime">Bảng Xếp Hạng</NuxtLink>
          </li>
        </ul>
        <form class="d-flex" role="search" v-on:submit.prevent="search">
          <input v-model="input" class="form-control me-2 tw-text-[13px]" type="search" placeholder="Search"
            aria-label="Search">
          <button class="btn btn-outline-success tw-text-[13px] tw-whitespace-nowrap" type="submit">Tìm Kiếm</button>
        </form>
      </div>
    </div>
  </nav>
</template>
    
<script setup lang="ts">
import { useMainStore } from '@/store';

const router = useRouter();
const mainStore = useMainStore();

let input = '';
let isActiveCategory = computed(() => {
  if (!mainStore.currentPath) return false;
  return mainStore.currentPath.startsWith("/danh-sach");
})
function search() {
  router.push(`/danh-sach?name=${input}`)
};
function toggleNav() {
  mainStore.setNavOpen(!mainStore.isNavOpen);
}

</script>
  
<style>
.menu-category {
  visibility: hidden;
  opacity: 0;
  /* Không hiển thị và không chiếm không gian */
  transition: visibility 0s, opacity 0.3s ease-in-out;
  /* Thêm transition */
}

.list-category:hover .menu-category {
  visibility: visible;
  opacity: 1;
  /* Hiển thị */
}

.nav-link {
  color: black;
}
</style>
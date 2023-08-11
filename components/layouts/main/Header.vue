<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary tw-shadow tw-bg-white">
      <div class="container">
        <RouterLink
          class="navbar-brand tw-bg-clip-text tw-text-transparent tw-bg-gradient-to-r tw-from-red-500 tw-to-violet-500 tw-dark:from-red-500 tw-dark:to-teal-600 tw-text-[22px]"
          to="/">TRUYENVUI.ONLINE</RouterLink>
        <button class="navbar-toggler" type="button" @click="toggleNav()" aria-controls="navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'tw-block': isNavOpen }" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" to="/danh-sach">Danh Sách</RouterLink>
            </li>
            <li class="nav-item tw-relative list-category tw-cursor-pointer">
              <span class="nav-link" :class="{ 'active-link': isActiveCategory }">Thể Loại</span>
              <div
                class="menu-category tw-absolute tw-z-[2] tw-p-[15px] tw-rounded-lg tw-w-[25rem] tw-left-[15%] max-md:tw-left-[-5%] max-md:tw-top-[8%]">
                <ul
                  class="tw-navbar-item-sub tw-overflow-hidden tw-mt-[10px] tw-ml-[32px] dark:tw-shadow-slate-700 dark:tw-shadow dark:tw-shadow-slate-700 tw-text-[13px] tw-font-light tw-ml-0 tw-p-[10px] tw-rounded-bl-2xl tw-rounded-br-2xl tw-bg-white tw-w-full tw-shadow-lg tw-absolute tw-bg-white dark:tw-bg-slate-800 tw-text-[14px] tw-flex tw-gap-2 lg:tw-gap-8 lg:tw-text-[14px] h-0 tw-transition-all tw-duration-300 tw-text-black dark:tw-text-teal-600">
                  <div class="menu-genre tw-grid tw-grid-cols-2 tw-gap-y-2 tw-grid tw-grid-cols-4 tw-gap-x-1">
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/action">
                        Action</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/comedy">
                        Comedy</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/sports">
                        Sports</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/xuyen-khong">Xuyên Không</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/doujinshi">Doujinshi</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/adventure">Adventure</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/horror">
                        Horror</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/school-life">School Life</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/shoujo">
                        Shoujo</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/shoujo-ai">Shoujo Ai</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/drama">
                        Drama</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/shounen">Shounen</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/shounen-ai">Shounen Ai</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/romance">Romance</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/magic">
                        Magic</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/psychological">Psychological</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/harem">
                        Harem</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/mystery">Mystery</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/fantasy">Fantasy</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/webtoon">Webtoon</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/reincarnatd">Reincarnated</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/gender-bender">Gender Bender</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/trinh-tham">Trinh Thám</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/cooking">Cooking</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/yaoi">
                        Yaoi</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/mature">
                        Mature</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/one-shot">One
                        Shot</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/slice-of-life">Slice of Life</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/historical">Historical</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/yuri">
                        Yuri</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 " to="/the-loai/ecchi">
                        Ecchi</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/supernature">Supernature</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/martial-arts">Martial Arts</RouterLink>
                    </li>
                    <li>
                      <RouterLink class="md:hover:tw-text-violet-600 dark:md:hover:tw-text-teal-500 "
                        to="/the-loai/gourmet">Gourmet</RouterLink>
                    </li>
                  </div>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/top-anime">Bảng Xếp Hạng</RouterLink>
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
    
  <script>
  import store from '@/store/store';
  import { mapState } from 'vuex'
  
  export default {
    name: "header-main",
    data() {
      return {
        input: ''
      }
    },
    computed: {
      ...mapState({
        isNavOpen: state => state.app.isNavOpen,
        currentPath: state => state.app.currentPath
      }),
      isActiveCategory() {
        if(!this.currentPath) return false;
        return this.currentPath.startsWith("/the-loai");
      }
    },
    methods: {
      search() {
        this.$router.push(`/danh-sach/${this.input}`)
      },
      toggleNav() {
        store.dispatch('app/setNavOpen', !this.isNavOpen);
      }
    }
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
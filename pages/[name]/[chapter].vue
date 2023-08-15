<script setup lang="ts">
import { useMainStore } from '@/store';

const route = useRoute();
const { name, chapter } = route.params;
let dataDetail = ref<any>([]);
let visibleFiles = ref<any>([]);
let manga = ref<any>({});
let listChapter = ref<any>([]);
let currentChapter = 0;
let listmanga = ref<any>([]);
let chapterInfo = ref<any>({});

const mainStore = useMainStore();

async function getListMangas() {
    const { data } = (await customFetch<any>('/manga/?page=1&limit=6&sortField=createdAt&sortOrder=desc'));
    listmanga = data.value.result.data;
}
function getCurrentChapter() {
    const regex = /(\d+(\.\d+)?)/;
    const matches = chapter.toString().match(regex);
    if(!matches) return 1;
    currentChapter = parseFloat(matches[0]);
}
async function getNewstChapter() {
    let url = `/chapter/?sortField=number&sortOrder=desc&filterOptions={"manga":"${manga._id}"}`;
    const { data } = (await customFetch<any>(url));
    listChapter = data.value.result.data;
}
async function getManga() {
    const { data } = (await customFetch<any>('/manga/' + name));
    manga = data.value.result
}
async function getChapterInfo() {
    const { data } = (await customFetch<any>(`/chapter/${chapter}/${manga._id}`));
    chapterInfo = data.value.result;
}
async function getContentByName() {
    try {
        const { data } = (await customFetch<any>(`/image/getChapterByImage/${chapterInfo._id}`));
        dataDetail.value = data.value.result
    }
    catch (e) {
        console.log(e)
    }
}
function renderFiles() {
    const numVisibleFiles = 7; // Số phần tử hiển thị ban đầu
    if (!dataDetail.value) return;
    visibleFiles = dataDetail.value.slice(0, numVisibleFiles);

    const remainingFiles = dataDetail.value.slice(numVisibleFiles);
    if (remainingFiles?.length > 0) {
        // Tạo delay 1 giây để load phần tử còn lại
        setTimeout(() => {
            visibleFiles = visibleFiles.concat(remainingFiles);
        }, 2000);
    }
}

const prePage = computed(() => {
    let page = '#';
    listChapter.forEach((chapter: any, index: any) => {
        if (chapter.number === currentChapter && listChapter[index]?.number && listChapter[index + 1]?.number) {
            page = `/${name}/chap-${listChapter[index + 1].number}`;
        }
    })
    return page;
});
const nextPage = computed(() => {
    let page = '#';
    listChapter.forEach((chapter: any, index: any) => {
        if (chapter.number === currentChapter && listChapter[index]?.number && listChapter[index - 1]?.number) {
            page = `/${name}/chap-${listChapter[index - 1].number}`;
        }
    })
    return page;
});
const newestPage = computed(() => {
    if (!listChapter) return null;
    return listChapter[0];
})

mainStore.setLoading(true);
await getManga();
await getChapterInfo();
await getContentByName();
renderFiles();
await getNewstChapter();
await getListMangas();
getCurrentChapter();
mainStore.setLoading(false);
useHead({
    title: `${manga.name} - ${chapterInfo.title}`,
    meta: [
        { name: 'description', content: `${manga.title} - ${chapterInfo.title}` },
        { name: 'keywords', content: manga.genre},
        { name: 'og:title', content: `${manga.title} - ${chapterInfo.title}`},
        { name: 'og:description', content: `${manga.name} - ${chapterInfo.title}`},
        { name: 'og:image', content: manga.coverImage},
        {
            name: 'og:image:width',
            content: 512,
        },
        {
            name: 'og:image:height',
            content: 512,
        },
    ],
    link: [
        { rel: 'canonical', href: 'https://truyenvui.online' + route.fullPath },
    ]
});

</script>
<template>
    <div class='container tw-mt-[1rem]'>
        <section class="tw-pl-0 tw-mb-[1rem] tw-px-[10px] d-flex align-items-center" v-if="manga">
            <i class="fa-solid fa-house tw-mr-2 "></i>
            <span class="tw-mr-1 tw-font-bold">/</span>
            <NuxtLink :to="'/' + manga?.slug ?? ''" class="tw-mr-1 tw-font-bold">{{ manga.name.substring(0, 20) }}</NuxtLink>
            <span class="tw-font-bold tw-mr-1">/</span>
            <div class="tw-font-bold">
                {{ chapter }}
            </div>
        </section>
        <section class="row mb-3 mt-2">
            <div class='col-md-8 row max-md:tw-mb-2' v-if="manga">
                <div class='col-md-4 col-sm-12' :class="{ 'max-md:tw-hidden': manga.showImage }">
                    <nuxt-img format="webp" :src="manga.coverImage" class="tw-rounded-xl tw-w-[100%]" :alt="manga.name" />
                </div>
                <div class='col-md-4 col-sm-12 tw-hidden max-md:tw-block'>
                    <nuxt-img format="webp" :src="manga.showImage" class="tw-rounded-xl tw-w-[100%]" :alt="manga.name" />
                </div>
                <div class='col-md-8'>
                    <h4 class='tw-uppercase tw-text-[20px] tw-font-medium'>{{ manga.name }}</h4>
                    <h5 class='tw-my-3 tw-font-medium'>{{ manga.title }}</h5>
                    <div class="tw-mb-2 tw-text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Tác giả</label>
                        <span>{{ manga.author }}</span>
                    </div>
                    <div class="tw-mb-2 tw-text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Tình trạng</label>
                        <span>Đang cập nhật</span>
                    </div>
                    <div class="tw-mb-2 tw-text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Mới nhất</label>
                        <span>
                            <NuxtLink class="tw-text-orange-600" :to="newestPage?.slug ?? '/'">{{ newestPage?.title }}
                            </NuxtLink>
                        </span>
                    </div>
                    <div class="mb-2 text-[14px]">
                        <label class="tw-w-[100px] tw-inline-block">Lượt đọc</label>
                        <span>{{ chapterInfo?.views }}</span>
                    </div>
                    <div>
                        <button
                            class="tw-rounded-xl tw-mr-2 s1024:tw-mr-4 tw-px-3 tw-py-1 tw-bg-teal-600 tw-text-white tw-text-[14px] tw-font-light">Thích
                            <span
                                class="tw-ml-[5px] tw-px-[5px] tw-text-[12px] tw-bg-white tw-rounded-lg tw-text-teal-600">132</span>
                        </button>
                        <button
                            class="tw-rounded-xl tw-mr-2 s1024:tw-mr-4 tw-px-3 tw-py-1 tw-bg-teal-600 tw-text-white tw-text-[14px] tw-font-light">Theo
                            Dõi
                            <span
                                class="tw-ml-[5px] tw-px-[5px] tw-text-[12px] tw-bg-white tw-rounded-lg tw-text-teal-600">132</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class='col-md-4'>
                <div class="tw-uppercase tw-text-orange-600">Nội dung</div>
                <div class="tw-mt-[10px] tw-text-[15px] tw-font-light tw-max-h-[18rem] tw-overflow-auto">
                    {{ manga.description }}
                </div>

            </div>
        </section>
        <hr />
        <main class='row tw-mt-[20px] tw-text-center d-flex justify-content-center'>
            <template v-if="!visibleFiles || visibleFiles?.length === 0">
                <div class="alert alert-primary tw-mt-3" role="alert">
                    Loading...
                </div>
            </template>
            <template v-for="img in visibleFiles" :key="index">
                <nuxt-img format="webp" :src="img.link" class="tw-w-[auto]" :alt="manga.name" />
            </template>
            <div
                class="tw-fixed tw-bottom-[10px] tw-left-0 tw-right-0 tw-w-[300px] tw-bg-black/50 tw-rounded-2xl tw-py-[10px] tw-mx-auto tw-flex tw-justify-center tw-gap-[10px] tw-z-50">
                <NuxtLink class="tw-block tw-w-[60px] tw-h-[30px] tw-bg-teal-600 tw-text-white tw-text-center tw-rounded-lg"
                    :to="prePage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="tw-w-6 tw-h-6 tw-inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                </NuxtLink>
                <div class="tw-d-flex tw-chapter-select tw-select-2 tw-relative tw-w-[120px] tw-cursor-pointer">
                    <div class="btn-group dropup">
                        <span data-bs-toggle="dropdown" aria-expanded="false"
                            class="tw-flex justify-content-center align-items-center tw-bg-teal-600 tw-text-white tw-rounded-lg tw-h-[30px] tw-px-[10px] tw-text-[14px] tw-font-light">
                            Chapter {{ currentChapter }}</span>
                        <div
                            class="tw-select-option tw-option-2 tw-absolute tw-bottom-0 tw-left-0 tw-w-[120px] tw-min-h-[31px] tw-max-h-[300px] tw-divide-y tw-rounded-lg tw-bg-teal-600 tw-text-white tw-shadow tw-hidden">
                        </div>
                        <ul class="dropdown-menu tw-overflow-auto tw-max-h-[15rem] tw-pt-0 tw-mb-[7px]">
                            <li v-for="chapter in listChapter" v-bind:key="chapter">
                                <NuxtLink :class="{ 'active-dropdown': chapter?.number == currentChapter }"
                                    class="tw-block tw-h-[2rem] tw-bg-yellow-600 tw-text-white tw-text-center dropdown-item"
                                    :to="`/${name}/chap-${chapter?.number}`">
                                    {{ chapter.title }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>

                </div>
                <NuxtLink class="tw-block tw-w-[60px] tw-h-[30px] tw-bg-teal-600 tw-text-white tw-text-center tw-rounded-lg"
                    :to="nextPage">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="tw-w-6 tw-h-6 tw-inline-block">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3">
                        </path>
                    </svg>
                </NuxtLink>
            </div>
        </main>

        <section class="tw-mt-[1rem] row">
            <h2
                class="tw-color-[red] tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                <div>CHƯƠNG MỚI NHẤT</div>
            </h2>
            <NuxtLink :to="'/' + manga2.slug" v-for="manga2 in listmanga" v-bind:key="manga2"
                class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[2rem] hover:overscroll-contain hover:tw-shadow-2xl tw-rounded-xl'>
                <nuxt-img format="webp" :src="manga2.coverImage" class="tw-w-full tw-h-full" :alt="manga.name" />
                <p class='tw-text-slate-800 tw-text-center tw-mt-1 max-sm:tw-text-[11px] tw-text-[13px]'>{{ manga2.name }}
                </p>
            </NuxtLink>
        </section>

    </div>
</template>

<style>
.list-dont::-webkit-scrollbar {
    width: 1px;
}
</style>
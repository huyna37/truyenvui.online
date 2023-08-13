<script setup lang="ts">
import { useMainStore } from '@/store';

const route = useRoute();
const { name } = route.params;
let dataDetail = ref<any>({});
let listChapter = ref<any>([]);
let currentPage = 1;
let isLoadingMore = false;
let listmanga = Array();
let listMangaTop = Array();
let isMaxList: Boolean;
let scrollContainerStyle = {
    scrollBehavior: "smooth",
    overflowX: "scroll",
};
let filterBy = '';


async function scrollListMovie(reduce?: boolean) {
    let container = document.getElementById('list-dont') as HTMLElement;
    if (!reduce) {
        container.scrollLeft += 200; // Cuộn 200px bên phải
        isMaxList = container.scrollLeft >= (container.scrollWidth - container.clientWidth) - 300;
    } else {
        container.scrollLeft = 0; // Cuộn về đầu danh sách
        isMaxList = false;
    }
}

async function getListMangas() {
    try {
        let query = {
            page: 1,
            limit: 15,
            sortField: 'createdAt',
            sortOrder: 'desc',
            filterOptions: JSON.stringify({
                "genre": { "$regex": "\\bcomedy\\b", "$options": "i" }
            })
        };
        const { data } = await customFetch<any>(`/manga/`, {
            params: query
        });
        listmanga = data.value.result.data;
    } catch (error) {
        // Xử lý lỗi ở đây nếu cần thiết
        console.error('Error in getListMangas:', error);
    }
}

async function getListMangasTop() {
    try {
        let query = {
            page: 1,
            limit: 5,
            sortField: 'views',
            sortOrder: 'asc',
            filterOptions: JSON.stringify({
                "genre": { "$regex": "\\bYuri\\b", "$options": "i" }
            })
        };
        const { data } = await customFetch<any>(`/manga/`, {
            params: query
        });
        listMangaTop = data.value.result.data;
    } catch (error) {
        // Xử lý lỗi ở đây nếu cần thiết
        console.error('Error in getListMangasTop:', error);
    }
}

async function getDetail() {
    const { data } = (await customFetch<any>('/manga/' + name));
    dataDetail = data.value.result;
}

async function getListChapter() {
    let urlValue = `/chapter/?page=${currentPage}&index=10&sortField=number&sortOrder=desc&filterOptions={"manga":"${dataDetail._id}"}`;
    if (filterBy) {
        urlValue = `/chapter/?page=${currentPage}&index=10&sortField=number&sortOrder=desc&filterOptions={"manga":"${dataDetail._id}"}&filter={"title": "${filterBy}"}`;
    }
    const { data } = await customFetch<any>(urlValue);
    return data.value.result;
}

async function loadMore() {
    isLoadingMore = true;
    currentPage += 1;
    const more = await getListChapter();
    listChapter.value = [...listChapter.value, ...more.data];
    isLoadingMore = false;
}

async function handleInput(event: any) {
    filterBy = event.target.value;
    currentPage = 1;
    listChapter.value = (await getListChapter()).data;
    console.log(listChapter.value)
}
let debouncedHandleInput = computed(() => {
    return useDebounce(handleInput, 300);
})

let genre = dataDetail?.genre?.split(";")

let newestPage = computed(() => {
    return listChapter.value[0];
})

const mainStore = useMainStore();

mainStore.setLoading(true);
await Promise.all([getDetail(), getListMangas(), getListMangasTop()]);
useHead({
    title: `${dataDetail.name} - NetTruyenVui`,
    meta: [
        { name: 'description', content: dataDetail.description },
        // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
        { name: 'og:site_name', content: route.fullPath },
        { name: 'og:type', content: 'website' },
        {
            name: 'og:url',
            content: route.fullPath,
        },
        {
            name: 'og:title',
            content: dataDetail.name,
        },
        {
            name: 'og:image:alt',
            content: dataDetail.title,
        },
        {
            name: 'og:image:width',
            content: 512,
        },
        {
            name: 'og:image:height',
            content: 512,
        },
        {
            name: 'og:description',
            content: dataDetail.description,
        },
        {
            name: 'og:image',
            content: dataDetail.showImage,
        },
        // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
        { name: 'twitter:site', content: route.fullPath },
        { name: 'twitter:card', content: 'summary_large_image' },
        {
            name: 'twitter:url',
            content: route.fullPath,
        },
        {
            name: 'twitter:title',
            content: dataDetail.name,
        },
        {
            name: 'twitter:description',
            content: dataDetail.description,
        },
        {
            name: 'twitter:image',
            content: dataDetail.coverImage,
        },
    ],
    link: [
        { rel: 'canonical', href: 'https://truyenvui.online' + route.fullPath },
    ]
});
listChapter.value = (await getListChapter())?.data;
mainStore.setLoading(false);

</script>
<template>
    <div class='container tw-mt-[1rem]' v-if="dataDetail">
        <section class="row">
            <div class='col-md-8'>
                <div class="col-md-12 row">
                    <div class='col-md-4 col-sm-12' :class="{ 'max-md:tw-hidden': dataDetail.showImage }">
                        <img v-if="dataDetail._id" :src="`${dataDetail.coverImage}`" class="tw-rounded-xl tw-w-[100%]" />
                    </div>
                    <div class='col-md-4 col-sm-12 tw-hidden max-md:tw-block'>
                        <img v-if="dataDetail._id" :src="`${dataDetail.showImage}`" class="tw-rounded-xl tw-w-[100%]" />
                    </div>
                    <div class='col-md-8'>
                        <h4 class='tw-uppercase tw-text-[20px] tw-font-medium'>{{ dataDetail.name.substring(0, 15) }}</h4>
                        <h5 class='tw-my-3 tw-font-medium'>{{ dataDetail.title }}</h5>
                        <div class="tw-mb-2 tw-text-[14px]">
                            <label class="tw-w-[100px] tw-inline-block">Tác giả</label>
                            <span>{{ dataDetail.author }}</span>
                        </div>
                        <div class="tw-mb-2 tw-text-[14px]">
                            <label class="tw-w-[100px] tw-inline-block">Tình trạng</label>
                            <span>{{ dataDetail.views ? 'Done' : 'In Progress' }}</span>
                        </div>
                        <div class="tw-mb-2 tw-text-[14px]">
                            <label class="tw-w-[100px] tw-inline-block">Mới nhất</label>
                            <span>
                                <NuxtLink class="tw-text-orange-600" :to="newestPage?.slug ?? '/'">{{ newestPage?.title }}
                                </NuxtLink>
                            </span>
                        </div>
                        <div class="mb-4 text-[14px]">
                            <label class="tw-w-[100px] tw-inline-block">Lượt đọc</label>
                            <span>{{ dataDetail.views }}</span>
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

                <h5 class="tw-mt-[10px] tw-uppercase tw-text-orange-600">Nội dung</h5>

                <p class="tw-mt-[10px] tw-text-[15px] tw-font-light">
                    {{ dataDetail.description }}
                </p>

                <div class="tw-mt-[10px] tw-text-[15px] tw-font-light tw-overflow-auto tw-min-h-[35px]">
                    <template v-if="genre">
                        <NuxtLink v-for="gen in genre" v-bind:key="gen"
                            class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            :to="'/the-loai/' + gen">{{
                                gen }}</NuxtLink>
                    </template>
                    <template v-else>
                        <a class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            href="/the-loai/comedy">Comedy</a>
                        <a class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            href="/the-loai/school-life">School Life</a>
                        <a class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            href="/the-loai/shounen">Shounen</a>
                        <a class="tw-bg-violet-200 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1 tw-py-1"
                            href="/the-loai/romance">Romance</a>
                    </template>

                </div>

                <div class="tw-mt-[20px] s768:tw-mt-[30px] d-flex justify-content-between">
                    <span class="tw-uppercase tw-text-orange-600 ">Danh sách chap</span>
                    <div>
                        <input @input="debouncedHandleInput"
                            class="tw-pl-[7px] tw-rounded-full tw-w-full tw-text-[14px]focus:tw-border-red-200 tw-border-violet-200 tw-outline tw-outline-slate-200"
                            placeholder="Tìm kiếm" />
                    </div>
                </div>

                <div class="tw-mt-[10px]">
                    <div
                        class="tw-w-full tw-flex tw-gap-2 tw-justify-between tw-border-b dark:tw-border-slate-600 tw-mb-2 tw-pb-2 tw-font-light">
                        <span class="tw-grow tw-min-w-[120px] chapter-name">Tên chap</span>
                        <span class="tw-shrink tw-text-right chapter-update">Cập nhật</span>
                        <span class="tw-min-w-[80px] tw-shrink-0 tw-text-right chapter-views">Lượt đọc</span>
                    </div>
                    <div class="chapter-list tw-relative tw-overflow-auto tw-overscroll-contain tw-max-h-[300px] tw-w-full tw-text-[14px] tw-font-light tw-ps-container tw-ps-theme-default"
                        data-ps-id="05e4af89-4385-b36d-f577-27e7e27d8ef3">
                        <template v-if="listChapter.length == 0">
                            <div class="tw-shrink tw-text-center tw-mb-2 chapter-update">Không Có Kết Quả</div>
                        </template>
                        <template v-else>
                            <div v-for="chapter in listChapter" v-bind:key="chapter"
                                class="tw-w-full tw-flex tw-gap-2 tw-justify-between tw-border-b dark:tw-border-slate-600 tw-mb-2 tw-pb-2 chapter-item">
                                <span class="tw-grow tw-min -w-[120px] chapter-name">
                                    <NuxtLink :to="`${$route.path}/${chapter.slug}`">
                                        {{ chapter.title }}
                                    </NuxtLink>

                                </span>
                                <span class="tw-shrink tw-text-right chapter-update">
                                    <NuxtTime :datetime="chapter.createdAt" second="numeric" month="long" day="numeric" />
                                </span>
                                <span class="tw-min-w-[80px] tw-shrink-0 tw-text-right tw-chapter-views">
                                    {{ chapter.views }}
                                </span>
                            </div>
                        </template>


                    </div>
                    <div>
                        <NuxtLink :to="`${$route.path}/chap-1`"
                            class="tw-text-bold me-2 tw-mb-3 tw-inline-block tw-cursor-pointer tw-rounded-xl tw-bg-blue-600 dark:tw-bg-orange-700 tw-px-4 tw-py-1 tw-text-white tw-text-[14px] tw-font-light">
                            Đọc Từ Đầu
                        </NuxtLink>
                        <div @click="loadMore"
                            class="chapter-more tw-mb-3 tw-inline-block tw-cursor-pointer tw-rounded-xl tw-bg-orange-600 dark:tw-bg-orange-700 tw-px-4 tw-py-1 tw-text-white tw-text-[14px] tw-font-light">
                            <span>
                                <template v-if="isLoadingMore">
                                    <i class="fa-solid fa-spinner tw-animate-spin"></i>
                                </template>
                                <template v-else>
                                    Xem Thêm
                                </template>
                            </span>
                        </div>
                    </div>

                    <div class="tw-mt-[20px] tw-text-[14px] tw-font-extralight tw-manga-tag">
                        Từ khoá:
                        <NuxtLink class="tw-bg-gray-300 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1"
                            :to="'/' + dataDetail.slug">{{ dataDetail.name }}</NuxtLink>
                        <NuxtLink class="tw-bg-gray-300 dark:tw-bg-slate-700 tw-rounded-lg tw-px-2 tw-mr-1"
                            :to="'/' + dataDetail.slug" v-if="dataDetail.author">{{ dataDetail.author }}</NuxtLink>
                    </div>
                </div>
            </div>
            <div class='col-md-4'>
                <div
                    class="tw-shrink-0 tw-mt-[20px] tw-s1024:mt-0 tw-s1024:w-[320px] tw-s1280:w-[354px] tw-s1024:pl-[20px] tw-s1280:pl-[34px]">
                    <h2
                        class="tw-w-full tw-text-orange-600 tw-mb-2 tw-underline tw-underline-offset-4 tw-decoration-2 tw-uppercase">
                        <a href="/">Top tuần</a>
                    </h2>
                    <div
                        class="tw-s480:grid tw-s480:grid-cols-2 tw-s768:grid-cols-4 tw-s1024:block tw-gap-[10px] tw-overflow-auto tw-max-h-[52rem]">
                        <div class="tw-mb-4 tw-s480:mb-0 tw-s1024:mb-4" v-for="top in listMangaTop" v-bind:key="top">
                            <NuxtLink :to="'/' + top.slug" v-if="top._id">
                                <div class="tw-relative tw-rounded-xl tw-overflow-hidden">
                                    <img class="tw-w-[auto]" :src="`${top.showImage}`" :alt="top.name">
                                    <div
                                        class="tw-absolute tw-left-0 tw-right-0 tw-bottom-0 tw-px-[10px] tw-pt-[20px] tw-pb-[5px] tw-bg-gradient-to-b tw-from-transparent tw-to-black tw-text-white tw-dark:text-teal-500">
                                        <span class="tw-text-[12px] tw-font-extralight tw-dark:text-teal-300">{{ top.views
                                        }} lượt
                                            đọc</span>
                                        <h3 class="tw-font-light tw-line-clamp-1">{{ top.name }}</h3>
                                    </div>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section class="tw-relative container tw-px-[10px] tw-mt-[20px] tw-pl-[0px]">
            <h2 class="tw-w-full tw-text-orange-600 tw-mb-2 tw-uppercase">ĐỪNG BỎ LỠ</h2>
            <div class="tw-flex tw-snap-x tw-snap-mandatory tw-overflow-x-auto tw-gap-[10px] list-dont" id="list-dont"
                :style="scrollContainerStyle">
                <div v-for="dont in listmanga" v-bind:key="dont"
                    class="tw-relative tw-snap-always tw-snap-start tw-shrink-0">
                    <NuxtLink :to="'/' + dont.slug" v-if="dont._id">
                        <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                            <img class="tw-w-[200px] tw-h-[300px]" :src="`${dont?.coverImage}`" :alt="dont.name">
                            <span
                                class="tw-absolute tw-top-[10px] tw-left-[10px] tw-rounded-lg tw-px-2 tw-bg-red-500/80 tw-text-white tw-text-[12px] tw-font-light">{{
                                    dont.views }}
                                <i class="fas fa-eye"></i></span>
                        </div>
                        <h3
                            class="tw-text-[14px] s360:tw-text-[16px] tw-text-left s640:tw-text-center line-clamp-2 tw-w-[10rem] tw-overflow-hidden">
                            {{ dont.name }}</h3>
                    </NuxtLink>
                </div>
                <div v-show="!isMaxList"
                    class="tw-absolute tw-top-[40%] tw-right-[1rem] tw-text-[2rem] tw-text-[red] tw-cursor-pointer"
                    @click="scrollListMovie()">
                    <i class="fa-solid fa-circle-arrow-right"></i>
                </div>
                <div v-show="isMaxList"
                    class="tw-absolute tw-top-[40%] tw-left-[1rem] tw-text-[2rem] tw-text-[red] tw-cursor-pointer"
                    @click="scrollListMovie(true)">
                    <i class="fa-solid fa-circle-arrow-left"></i>
                </div>
            </div>
        </section>
    </div>
    <div v-else>
        <div class="alert alert-warning tw-mt-[1rem] text-center" role="alert">
            <p>Không tìm thấy truyện phù hợp</p>
            <NuxtLink to="/" class="btn">Back To Home</NuxtLink>
        </div>
    </div>
</template>

<style>
.list-dont::-webkit-scrollbar {
    width: 1px;
}
</style>
<template>
    <div class='container tw-mt-[1rem]'>
        <template v-if="resultPage && resultPage.length > 0">
            <section class="row tw-mb-4">
                <h2
                    class="tw-w-full tw-text-orange-600 tw-mb-2 tw-uppercase tw-underline tw-underline-offset-4 tw-decoration-2 tw-mb-[1.2rem]">
                    Danh sách truyện</h2>
                <div class="col-lg-2 col-md-3 col-sm-4 col-4" v-for="manga in resultPage" v-bind:key="manga">
                    <NuxtLink :to="'/' + manga.slug"
                        class='col-lg-2 col-md-3 col-4 max-lg:tw-mb-[2.5rem] hover:overscroll-contain hover:tw-shadow-2xl'>
                        <img class="tw-h-[auto] tw-w-full tw-rounded-xl" :src="manga.coverImage" :alt="manga.name">
                        <p
                            class='tw-text-slate-800 tw-h-[37px] tw-overflow-hidden tw-text-center tw-mt-1 max-sm:tw-text-[11px] tw-text-[13px]'>
                            {{ manga.name }}
                        </p>
                    </NuxtLink>
                </div>
            </section>
            <Paginate @page-change="updatePaginate" :currentPage="pageIndex" :totalPages="totalPages"></Paginate>
        </template>

        <template v-else>
            <div class="alert alert-primary text-center w-100 mb-3" role="alert">
                <div>Không Có kết quả!</div>
                <NuxtLink to="/" class="btn btn-primary tw-text-yellow">Back To Home</NuxtLink>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store'
import Paginate from '@/components/shared/paginated.vue'
const mainStore = useMainStore();
const { setLoading } = mainStore;
const resultPage = ref<any>([]);
const pageIndex = ref<any>(1);
const limit = ref<any>(15);
const totalPages = ref<any>(1);
const router = useRouter()
const route = useRoute();
const { name, category } = route.query;
await getMangas();
async function updatePaginate(event: any) {
    pageIndex.value = event;
    await getMangas();
}
async function getMangas() {
    try {
        let query = {
            page: pageIndex,
            limit: limit,
            sortField: 'createdAt',
            sortOrder: 'desc'
        }
        if (category) {
            query.filterOptions = JSON.stringify({ "genre": { $regex: `\\b${category}\\b`, $options: 'i' } });
        }
        if (name) {
            query.filter = JSON.stringify({ name: name })
        }
        const {data: response} = await customFetch<any>(`/manga/`, {
            params: query
        });
        resultPage.value = response.value.result.data;
        
        if (resultPage.length === 1) {
            const manga = resultPage[0];
            router.push(`/${manga.slug}`);
        }
        totalPages.value = response.value.result.totalPages;
    } catch (error) {
        // Xử lý lỗi ở đây nếu cần thiết
        console.error(error);
    }
}
</script>

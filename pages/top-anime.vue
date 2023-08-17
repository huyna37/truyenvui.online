<template>
    <div class='container tw-mt-[1rem]'>
        <template v-if="result && result.length > 0">
            <section class="row tw-mb-4">
                <h2
                    class="text-center tw-w-full tw-text-orange-600 tw-mb-2 tw-uppercase tw-underline tw-underline-offset-4 tw-decoration-2 tw-mb-[1.2rem]">
                    Bảng Xếp Hạng</h2>
                <div v-for="manga in result" v-bind:key="manga"
                    class="col-lg-2 col-md-3 col-sm-4 col-6 tw-relative tw-snap-always tw-snap-start tw-shrink-0">
                    <NuxtLink :to="'/' + manga.slug" v-if="manga._id">
                        <div class="tw-overflow-hidden tw-w-full tw-rounded-xl">
                            <nuxt-img format="webp" :src="manga.coverImage" class="tw-w-[200px] tw-h-[300px]"
                                :alt="manga.name" />
                            <span
                                class="tw-absolute tw-top-[8px] tw-left-[16px] tw-rounded-lg tw-px-2 tw-bg-red-500/80 tw-text-white tw-text-[12px] tw-font-light">{{
                                    manga.views }}
                                <i class="fas fa-eye"></i></span>
                        </div>
                        <h3
                            class="lg:tw-whitespace-nowrap tw-text-center tw-h-[37px] tw-text-[14px] line-clamp-2 tw-overflow-hidden">
                            {{ manga.name }}</h3>
                    </NuxtLink>
                </div>
            </section>
        </template>

        <template v-else>
            <div class="alert alert-primary text-center w-100 mb-3" role="alert">
                <div>Không Có kết quả!</div>
                <RouterLink to="/" class="btn btn-primary tw-text-yellow">Back To Home</RouterLink>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
const result = ref<any>([]);
const pageIndex = ref(1);
const limit = 18;
const totalPages = ref(1);


async function getMangas() {
    try {
        let query = {
            page: pageIndex,
            limit: limit,
            sortField: 'views',
            sortOrder: 'desc',
        }
        const { data: response } = await customFetch<any>(`/manga/`, {
            params: query
        });
        const res = response.value.result;
        result.value = res.data;

        if (res.length === 1) {
            const manga = result.value[0];
            router.push(`/${manga.slug}`);
        }

        totalPages.value = res.totalPages;
    } catch (error) {
        // Xử lý lỗi ở đây nếu cần thiết
        console.error(error);
    }
}

await getMangas();
</script>
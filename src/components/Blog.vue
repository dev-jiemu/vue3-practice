<template>
    <main class="container mb-3">
        <div class="row g-5">
            <div class="col-md-8">
                <h3 class="pb-4 mt-4 mb-4 fst-italic border-bottom">
                    Sample Vue Blog :-D
                </h3>
                <article class="blog-post" v-for="article in sliced_posts" :key="article.id" :id="'article-' + article.id">
                    <h2 class="blog-post-title"> {{ article.title }} </h2>
                    <p class="blog-post-meta"> {{ article.date }} </p>
                    <div v-html="article.post"/>
                </article>

                <nav class="blog-pagination" aria-label="Pagination">
                    <a
                        class="btn"
                        :class="[
                            page == 1 ? 'btn-outline-secondary disabled' : 'btn-outline-primary',
                        ]"
                        @click="page--"
                        href="#">Older</a>
                    {{ page }}
                    <a
                        class="btn"
                        :class="[
                            page == total_pages ? 'btn-outline-secondary disabled' : 'btn-outline-primary',
                        ]"
                        @click="page++"
                        href="#" tabindex="-1" aria-disabled="true">Newer</a>
                </nav>

            </div>

            <div class="col-md-4">
                <div class="position-sticky" style="top: 2rem;">
                    <div class="p-4 mb-3 bg-light rounded">
                        <h4 class="fst-italic">About</h4>
                        <p class="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
                    </div>

                    <div class="p-4">
                        <h4 class="font-italic">Archives</h4>
                        <ol class="list-unstyled mb-0">
                            <li v-for="(archive, index) in archives" :key="index">
                                <a
                                    data-bs-toggle="collapse"
                                    :data-bs-target="'#archive-' + index"
                                    href="#"
                                >{{ archive.key }}</a>
                                <div class="collapse" :id="'archive-' + index">
                                    <ol class="list-unstyled ms-3">
                                        <li v-for="post in archive.posts" :key="post.id">
                                            {{ post.date.substring(0, 10) + ': ' }}
                                            <a
                                                :href="'#article-' + post.id"
                                                @click="onArchive($event, post.id)"
                                            >{{ post.title.substring(0, 20) }}</a>
                                        </li>
                                    </ol>
                                </div>
                            </li>
                        </ol>
                    </div>

                    <div class="p-4">
                        <h4 class="fst-italic">Elsewhere</h4>
                        <ol class="list-unstyled">
                            <li><a href="#">GitHub</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import {computed, onMounted, reactive, ref} from "vue";
import useAxios from '/@app_modules/axios'

export default {
    name: "Blog",
    setup() {
        const { axiosGet } = useAxios()
        const posts = reactive([])
        const archives = reactive([])
        const onArchive = (evt, id) => {
            const index = posts.findIndex((post) => post.id == id) + 1
            page.value = Math.ceil(index / rows.value)
        }

        //pagination
        const rows = ref(5)
        const total_rows = ref(0)
        const page = ref(1)
        const total_pages = computed(() => {
            return Math.ceil(total_rows.value / rows.value)
        })
        const sliced_posts = computed(() => {
            return posts.slice((page.value - 1) * rows.value, page.value * rows.value)
        })

        onMounted(() => {
            axiosGet('/db/blog', (data) => {
                Object.assign(posts, data.data)
                total_rows.value = posts.length

                const temp_group = posts.reduce((accumulator, currentValue) => {
                    ;(accumulator[currentValue['date'].substring(0, 7)] = accumulator[currentValue['date'].substring(0, 7)] || []).push(currentValue)
                    return accumulator
                }, {})

                Object.assign(archives, Object.keys(temp_group).map((key) => ({
                    key: key,
                    posts: temp_group[key],
                })))
            })
        })

        return {
            sliced_posts, page, total_pages, archives, onArchive,
        }
    },
}
</script>

<style>
    /* Pagination */
    .blog-pagination {
        margin-bottom: 4rem;
    }
    .blog-pagination > .btn {
        border-radius: 2rem;
    }

    /*
     * Blog posts
     */
    .blog-post {
        margin-bottom: 4rem;
    }
    .blog-post-title {
        margin-bottom: .25rem;
        font-size: 2.5rem;
    }
    .blog-post-meta {
        margin-bottom: 1.25rem;
        color: #727272;
    }
</style>
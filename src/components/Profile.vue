<template>
    <div class="container pt-5">
        <div
            class="row no-gutters"
            v-for="(d, index) in user_data.resume"
            :key="index"
        >
            <Card :top="!index" :resume="d" :show="index % 2 == 1" />
            <div class="col-sm-2"/>
            <Card :top="!index" :resume="d" :show="index % 2 == 0" />
        </div>
    </div>
</template>

<script>
import Card from '/@components/Card.vue'
import { computed } from "vue";
import { useStore } from "vuex";
import useAxios from '/@app_modules/axios'

export default {
    name: "Profile",
    components: {
        Card,
    },
    setup() {
        const store = useStore()
        const { axiosGet } = useAxios()

        axiosGet('/db/about-me', (data) => {
            store.dispatch('about_me/setAboutMeData', data.data)
        })

        const user_data = computed(() =>
            store.getters['about_me/user_data']
        )

        return {
            user_data,
        }
    }
}
</script>
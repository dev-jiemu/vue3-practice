<template>
    <v-container>
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col cols="2" class="mt-3 text-right">pageSize : </v-col>
                    <v-col cols="2">
                        <v-text-field variant="outlined" density="compact" v-model="pageSize"></v-text-field>
                    </v-col>
                    <v-col cols="2" class="mt-3 text-right">totalVisible : </v-col>
                    <v-col cols="2">
                        <v-text-field variant="outlined" density="compact" v-model="totalVisiable"></v-text-field>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-text>
                <v-pagination
                    v-model="page"
                    :length="length"
                    :total-visible="totalVisiable"
                    next-icon="mdi-menu-right"
                    prev-icon="mdi-menu-left"
                ></v-pagination>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script setup>

import {computed, ref} from "vue";

const totalCount = 587

const pageSize = ref(25)
const totalVisiable = ref(10)

const page = ref(1)

const length = computed(() => {
    return Math.floor(totalCount / pageSize.value) + (((totalCount % pageSize.value) > 0) ? 1 : 0)
})

</script>
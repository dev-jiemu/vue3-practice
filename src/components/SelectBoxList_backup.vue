<template>
    <v-card
        class="mx-auto overflow-y-auto"
        width="150"
    >
        <v-list
            max-height="300"
            :style="settingStyle"
        >
            <v-list-group :value="open" v-model="selectTime">
                <template v-slot:activator="{ props }">
                    <v-list-item append-icon="mdi-triangle-down-outline" v-bind="props" @click="toggleGroup">
                        <span class="ml-4">{{ selectTime }}</span>
                    </v-list-item>
                </template>
                <v-list-item
                    v-for="(value, idx) in timeList"
                    :key="idx"
                    :title="value"
                    :value="value"
                    @click="updateSelectTime(value)"
                ></v-list-item>

            </v-list-group>
        </v-list>
    </v-card>
</template>

<script setup>
import { ref } from "vue";

const open = ref(true)
const timeList = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const selectTime = ref('05')

const updateSelectTime = (value) => {
    selectTime.value = value;
    toggleGroup()
};

function toggleGroup() {
    open.value = !open.value
}

function settingStyle() {
    let style = {
        scrollSnapType: ''
    }

    if (selectTime.value != '') {
        style.scrollSnapType = 'y mandatory'
    }

    return style
}

</script>

<style scoped>

</style>

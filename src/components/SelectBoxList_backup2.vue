<template>
    <v-card
        class="mx-auto"
        width="300"
    >
        <v-list class="overflow-y-auto" :style="listStyle">
            <v-list-group v-model="selectTime">
                <template v-slot:activator="{ props }">
                    <v-list-item class="ml-4"
                                 v-bind="props"
                    >{{selectTime}}</v-list-item>
                </template>
                <template v-for="(time, idx) in timeList">
                    <v-list-item :value="time" :id="time" @click="setSelectTime(time)">
                        <v-list-item-title v-text="time"></v-list-item-title>
                    </v-list-item>
                </template>
            </v-list-group>
        </v-list>
    </v-card>
</template>

<script setup>
import {computed, ref} from "vue";

const open = ref(true)
const timeList = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const selectTime = ref('05')

function setSelectTime(value) {
    selectTime.value = value
}

const listStyle = computed(() => {
    let style = {
        scrollSnapType: 'y mandatory'
    }

    return style
})

</script>



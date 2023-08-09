<template>
    <v-card
        class="mx-auto"
        width="300"
    >
        <select id="timeSelect" v-model="selectTime">
            <option v-for="time in timeList" :key="time" :value="time" :class="{ 'scroll-snap': time === '02' }">{{ time }}</option>
        </select>
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
<style>
select {
    width: 150px;
    height: 40px;
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    border-radius: 5px;

}

option.scroll-snap {
    scroll-snap-type: y proximity;
}
</style>


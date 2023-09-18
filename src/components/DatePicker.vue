<template>
    <VueDatePicker v-model="date" :enable-time-picker="false" :format="format"></VueDatePicker>
</template>
<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {ref} from "vue";

const date = ref(new Date())

const format = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
}

</script>
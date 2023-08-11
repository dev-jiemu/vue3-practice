<template>
    <v-container>
        <v-textarea v-model="editText" :value="editText.slice(0, maxLength)"></v-textarea>
    </v-container>
</template>
<script setup>

import {ref} from "vue";

const editText = ref('')
const maxLength = 10

function checkTextLength(event) {
    if (editText.value.length >= maxLength) {
        event.preventDefault(); // 입력 막기
    }
}

</script>
<template>
    <v-card width="400">
        <v-btn @click="selectAll">All On</v-btn> <v-btn @click="unselectAll">All Off</v-btn>
        <v-chip-group multiple column v-model="selected">
            <v-chip filter>Chip 1</v-chip>
            <v-chip filter>Chip 2</v-chip>
            <v-chip filter>Chip 3</v-chip>
        </v-chip-group>
    </v-card>
</template>
<script setup>
import {ref} from "vue";

const selected = ref([])

function selectAll() {
    selected.value.push(0)
    selected.value.push(1)
    selected.value.push(2)
}

function unselectAll() {
    selected.value = Array()
}
</script>
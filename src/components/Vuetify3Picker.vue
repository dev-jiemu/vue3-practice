<template>
    <v-container>
        <v-row>
            <v-menu v-model="isStartMenu" :close-on-content-click="false">
                <template v-slot:activator="{ props }">
                    <v-text-field
                            prepend-icon="mdi-calendar-blank-outline"
                            variant="outlined"
                            density="compact"
                            v-model="getStartDate"
                            v-bind="props"
                    ></v-text-field>
                </template>
                <v-date-picker
                        v-model="startDate"
                        max-width="400"
                        color="orange-darken-1"
                        hide-actions
                        @click="isStartMenu = false"
                >
                </v-date-picker>
            </v-menu>
        </v-row>
    </v-container>
</template>
<script setup>
import {computed, ref} from 'vue';
import { VDatePicker } from "vuetify/labs/components"

const isStartMenu = ref(false)
const startDate = ref(new Date())
const getStartDate = computed(() => {
    const year = startDate.value.getFullYear();
    const month = String(startDate.value.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.value.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
})


function handleDateSelection() {
    // OK 버튼이나 날짜를 선택했을 때
    this.isStartMenu = false;
}
</script>
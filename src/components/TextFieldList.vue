<template>
    <v-container>
        <v-card class="ma-3">
            <v-card-text>
                <template v-for="(value, key) in objList" :key="key">
                    <v-row>
                        <v-col cols="4">
                            {{ key }}
                        </v-col>
                        <v-col cols="8">
                            <v-text-field v-model="objList[key]"></v-text-field>
                        </v-col>
                    </v-row>
                </template>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script setup>
import {ref} from "vue";

const objList = ref({
    name: 'John',
    age: 25,
    country: 'USA',
    config: 'OBJECT'
})


</script>
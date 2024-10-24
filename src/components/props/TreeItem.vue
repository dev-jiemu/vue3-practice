<template>
    <v-card variant="outlined" color="grey-darken-2" :width="cardWidth" class="ma-2"
            :style="{ marginLeft: marginLeft }">
        <v-card-text class="ma-1 d-flex align-center justify-center">
            <v-row>
                <v-col cols="2" class="text-center">
                    <v-icon v-if="props.model.type && props.model.type === 'target'" size="large" density="compact">
                        mdi-circle-small
                    </v-icon>
                    <v-icon v-else-if="isFolder"
                            :style="{'transform': isOpen ? 'rotate(180deg)' : 'rotate(90deg)'}"
                            size="large"
                            density="compact"
                            @click="updateOpen"
                    >mdi-triangle
                    </v-icon>
                </v-col>
                <v-col>
                    <span class="text-h6 font-weight-bold">{{ props.model.name }}</span>
                </v-col>
                <v-col cols="2" class="text-center">
                    <v-icon size="large" density="compact">mdi-plus</v-icon>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
    <template v-if="isOpen" v-for="item in props.model.children">
        <tree-item :model="item" :depth="depth + 1"/>
    </template>
</template>
<script setup>
import {computed, ref} from "vue";

const props = defineProps(['model', 'depth'])

const isOpen = ref(false)
const isFolder = computed(() => {
    return props.model.children && props.model.children.length
})

const updateOpen = () => {
    isOpen.value = !isOpen.value
}

const marginLeft = computed(() => {
    return `${props.depth * 20}px`
})

const cardWidth = computed(() => {
    return 300 - (props.depth * 20)
})

</script>

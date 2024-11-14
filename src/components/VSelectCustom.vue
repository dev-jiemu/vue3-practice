<template>
    <v-container>
        <v-card width="300">
            <v-card-title>
                Select Box Multiple
            </v-card-title>
            <v-card-text>
                <v-select
                    v-model="selected"
                    density="compact"
                    variant="outlined"
                    hide-details="auto"
                    :items="items"
                    item-title="title"
                    item-value="value"
                    multiple
                    @update:model-value="checkSelected"
                    return-object
                >
                    <template v-slot:prepend-item>
                        <v-list-item
                            class="ma-0"
                            density="compact"
                            @click="selectAll"
                        >
                            <template v-slot:prepend>
                                <v-checkbox
                                    v-model="allSelected"
                                    @update:model-value="selectAll"
                                    color="primary"
                                    hide-details
                                ></v-checkbox>
                            </template>
                            <v-list-item-title>Select All</v-list-item-title>
                        </v-list-item>
                        <v-divider class="ma-0"></v-divider>
                    </template>
                    <template v-slot:selection="{ index }">
                        <template v-if="index === 0">
                            {{ formatSelection }}
                        </template>
                    </template>
                </v-select>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup>
import {computed, ref} from "vue";

const items = [
    {title: 'Store 1', value: '1'},
    {title: 'Store 2', value: '2'},
    {title: 'Store 3', value: '3'},
    {title: 'Store 4', value: '4'},
    {title: 'Store 5', value: '5'},
    {title: 'Store 6', value: '6'},
]

const selected = ref([])
const allSelected = ref(false)

const selectAll = () => {
    allSelected.value = !allSelected.value
    selected.value = allSelected.value ? [...items] : []
}

const checkSelected = () => {
    allSelected.value = selected.value.length === items.length
}

const formatSelection = computed(() => {
    if (selected.value.length === 0) {
        return ''
    } else if (allSelected.value) {
        return 'Select All'
    }

    const maxLength = 20
    const titles = selected.value.map(item => item.title)
    const combined = titles.join(', ')

    return combined.length <= maxLength ? combined : combined.slice(0, maxLength - 3) + '...'
})
</script>

<template>
    <v-container>
        <v-card width="300">
            <v-table>
                <thead>
                <tr>
                    <th class="font-weight-bold text-h6">Name</th>
                    <th class="font-weight-bold text-h6">Move</th>
                </tr>
                </thead>
                <draggable v-model="items" tag="tbody" handle=".drag-handle">
                    <template #item="{ element }">
                        <tr>
                            <td>{{ element.name }}</td>
                            <td>
                                <v-btn icon class="drag-handle" variant="text" size="small">
                                    <v-icon>mdi-drag-vertical</v-icon>
                                </v-btn>
                            </td>
                        </tr>
                    </template>
                </draggable>
            </v-table>
        </v-card>
    </v-container>
</template>
<script setup>
import draggable from 'vuedraggable'
import {ref} from "vue";

const items = ref([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
])
</script>
<style scoped>
.drag-handle {
    cursor: move;
}
</style>
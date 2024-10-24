<template>
    <v-container>
        <div class="text-h6"> * Tree</div>
        <div style="max-width: 300px;" class="tree-container">
            <template v-for="item in items">
                <tree-item :model="item" :depth="0"/>
            </template>
        </div>
    </v-container>
</template>
<script setup>
import treeItem from './props/TreeItem.vue'

const items = [
    {
        name: '메뉴1',
        children: [
            {
                name: 'Sub 메뉴 1',
                children: [
                    {name: 'Sub2 메뉴 1', type: 'target'}
                ]
            }
        ]
    },
    {
        name: '메뉴2',
        children: []
    },
    {
        name: '메뉴3',
        children: [
            {name: 'Sub 메뉴 1', type: 'target'},
            {name: 'Sub 메뉴 2', type: 'target'}
        ]
    }
]
</script>
<style scoped>
.tree-container {
    max-width: 300px;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>
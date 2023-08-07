<template>
    <v-select
            v-model="selectedItem"
            :items="visibleItems"
            label="Select an item"
            @click.native="toggleDropdown"
            :class="{'open': dropdownOpen}"
            @focus="scrollToSelectedItem"
            @wheel="handleWheel"
    >
        <template v-slot:selection="{ item }">
            {{ item }}
        </template>
    </v-select>
    <i
            class="icon"
            :class="{'open': dropdownOpen}"
            @click="toggleDropdown"
    ></i>
</template>

<script setup>
import { ref, watch } from 'vue';

const selectedItem = ref('Item 3');
const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
const dropdownOpen = ref(false);
const itemHeight = 40; // 아이템 하나의 높이

const toggleDropdown = () => {
    dropdownOpen.value = !dropdownOpen.value;
};

const scrollToSelectedItem = () => {
    if (dropdownOpen.value && selectedItem.value) {
        const index = items.indexOf(selectedItem.value);
        if (index !== -1) {
            const dropdown = document.querySelector('.v-select-list');
            dropdown.scrollTop = index * itemHeight;
        }
    }
};

const sortedItems = [...items].sort((a, b) => {
    if (a === selectedItem.value) return -1;
    if (b === selectedItem.value) return 1;
    return 0;
});

const handleWheel = (event) => {
    if (dropdownOpen.value) {
        event.preventDefault();
        const dropdown = document.querySelector('.v-select-list');

        if (event.deltaY < 0 && dropdown.scrollTop > 0) {
            // Scroll up
            dropdown.scrollTop -= itemHeight;
        } else if (event.deltaY > 0 && dropdown.scrollTop < (items.length - 1) * itemHeight) {
            // Scroll down
            dropdown.scrollTop += itemHeight;
        }
    }
};

const visibleItems = ref(sortedItems);
watch(selectedItem, () => {
    const index = items.indexOf(selectedItem.value);
    if (index !== -1) {
        visibleItems.value = [...items.slice(index), ...items.slice(0, index)];
    }
});
</script>

<style scoped>
.icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
}

.icon.open {
    transform: translateY(-50%) rotate(180deg);
}

.open .v-select-list {
    margin-top: 0;
}
</style>

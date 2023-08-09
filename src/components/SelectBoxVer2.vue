<template>
    <v-container>
        <v-card width="150" class="text-center">
            <v-row justify="center">
                <v-menu
                        ref="menu"
                        transition="scroll-y-transition"
                >
                    <template v-slot:activator="{ props }">
                        <v-btn
                                color="primary"
                                class="ma-2"
                                v-bind="props"
                        >
                            {{ selected }}
                        </v-btn>
                    </template>
                    <v-list
                            ref="list"
                            max-height="150"
                            :class="{
                                'listScroll': true,
                                'enableListScroll': scroll,
                            }"
                    >
                        <v-list-item
                                :class="{ 'selected-item': item === selected }"
                                v-for="item in time"
                                :key="item"
                                link
                                @click="settingSelected(item)"
                        >
                            <v-list-item-title v-text="item"></v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-row>
        </v-card>
    </v-container>
</template>

<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const selected = ref("04");
const time = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"];
const scroll = ref(true);

function settingSelected(value) {
    selected.value = value;
    scroll.value = true;
}

const handleWheelEvent = (event) => {
    if (scroll.value == true) {
        scroll.value = false
    }
};

onMounted(() => {
    window.addEventListener('wheel', handleWheelEvent);
});

onUnmounted(() => {
    window.removeEventListener('wheel', handleWheelEvent);
});


</script>

<style>
.listScroll {
    overflow-y: scroll;
}

.enableListScroll {
    scroll-snap-type: y mandatory;
}

.listScroll::-webkit-scrollbar {
    width: 10px;
}
.listScroll::-webkit-scrollbar-thumb {
    background-color: #ffd54f;
    border-radius: 10px;
}
.listScroll::-webkit-scrollbar-track {
    background-color: #ff8f00;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
}

.selected-item {
    scroll-snap-align: start;
    scroll-snap-stop: normal;
}
</style>

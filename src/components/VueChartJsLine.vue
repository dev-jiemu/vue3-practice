<template>
    <v-card>
        <v-card-text>
            <div>
                <v-btn class="ma-2" color="success" variant="outlined" @click="addData">Add</v-btn>
                <v-btn class="ma-2" color="primary" variant="outlined" @click="updateData">Update</v-btn>
                <v-btn class="ma-2" color="red" variant="outlined">Delete</v-btn>
            </div>
        </v-card-text>
    </v-card>
    <v-card height="500px">
        <line-chart :key="updateKey" :data="chartData" :options="options"/>
    </v-card>
</template>

<script setup>
import {computed, onBeforeMount, ref, watch} from "vue";
import LineChart from "/@components/props/LineChart.vue"
import {useCharStatStore} from "/@store/ChartStat.js";

const chartStat = useCharStatStore()
const chartData = computed(() => {
    return chartStat.chartData
})

const updateKey = ref(0)

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: 'left',
        }
    }
}

function addData() {
    chartStat.addData()
    updateKey.value++
}

function updateData() {
    chartStat.updateData()
    updateKey.value++
}

onBeforeMount(() => {
    chartStat.initData()

    console.log('onBeforeMount: ', chartData.value)
})
</script>

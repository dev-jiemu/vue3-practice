<template>
    <v-card>
        <v-card-text>
            <div>
                <v-btn class="ma-2" color="success" variant="outlined" @click="addData">Add</v-btn>
                <v-btn class="ma-2" color="red" variant="outlined">Delete</v-btn>
            </div>
        </v-card-text>
    </v-card>
    <v-card height="500px">
        <line-chart ref="chart" :data="chartData" :options="options"/>
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


const chart = ref(null)

function addData() {
    chartStat.addData()
}

onBeforeMount(() => {
    chartStat.initData()

    console.log('onBeforeMount: ', chartData.value)
})
</script>

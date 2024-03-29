<template>
    <v-container>
        <v-card>
            <v-card-text>
                <v-row>
                    <v-col cols="6">
                        <apexchart
                            width="550"
                            type="area"
                            :options="chartOptions"
                            :series="getSeries"
                        ></apexchart>
                        <v-divider/>
                        <div class="text-center">
                            <v-btn variant="outlined" color="success" @click="updateChart">Update!</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup>
import {computed, ref} from "vue";

// https://apexcharts.com/docs/installation/

let getSeries = computed(() => {
    return series.value
})

let chartOptions = {
    chart: {
        id: "vuechart-example",
    },
    xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
    },
    dataLabels: {
        enabled: false // 라벨데이터 on/off
    },
    title: {
        text: 'Vue.js 3 Apex Charts Area',
        align: 'left',
        style: {
            fontSize: '14px'
        }
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
}

const series = ref([
    {
        data: [30, 40, 45, 50, 49, 60, 70, 81],
    },
])

const updateChart = () => {
    const max = 90;
    const min = 20;
    const newData = series.value[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    });

    const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

    // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
    chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
    };
    // In the same way, update the series option
    //series.value = []
    series.value.push({data: newData})
}
</script>
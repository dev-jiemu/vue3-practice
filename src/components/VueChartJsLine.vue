<template>
    <v-card>
        <v-card-text>
            <div>
                <v-btn class="ma-2" color="success" variant="outlined">Add</v-btn>
                <v-btn class="ma-2" color="red" variant="outlined" @click="updateLines(2)">Delete</v-btn>
            </div>
        </v-card-text>
    </v-card>
    <v-card height="500px">
        <line-chart ref="chart" :data="chartData" :options="options"/>
    </v-card>
</template>

<script setup>
import {ref} from "vue";
import LineChart from "/@components/props/LineChart.vue"

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

const chartData = ref({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: initData()
})

const chart = ref(null)

function initData() {
    let dataset = new Array()

    for (let i = 0; i < 3; i++) {
        let dataObj = {}

        let color = getRandomColor()

        dataObj.label = 'Data ' + (i + 1)
        dataObj.borderColor = color
        dataObj.backgroundColor = color
        dataObj.tension = 0.5
        dataObj.data = generateRandomNumbers(7)
        dataObj.hidden = false

        dataset.push(dataObj)
    }

    return dataset
}

function updateLines(index) {
    let newDataset = JSON.parse(JSON.stringify(chartData.value.datasets))
    newDataset[index].hidden = !newDataset[index].hidden

    chartData.value = {...chartData.value, datasets: newDataset}
}

function generateRandomNumbers(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100); // 0부터 99까지의 랜덤 숫자 생성
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


</script>

import {defineStore} from "pinia";
import {ref} from "vue";

const chartData = ref({
    labels: [],
    datasets: []
})

function initData() {
    let dataset = Array()
    let labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

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

    chartData.value.labels = labels
    chartData.value.datasets = dataset
}

function addData() {
    let newDataset = JSON.parse(JSON.stringify(chartData.value.datasets))

    let dataObj = {}
    let color = getRandomColor()

    dataObj.label = 'New Data'
    dataObj.borderColor = color
    dataObj.backgroundColor = color
    dataObj.tension = 0.5
    dataObj.data = generateRandomNumbers(7)
    dataObj.hidden = false

    newDataset.push(dataObj)
    chartData.value = {...chartData.value, datasets: newDataset}
    console.log('datasets : ', chartData.value.datasets)
}

function updateLines(index) {
    let newDataset = JSON.parse(JSON.stringify(chartData.value.datasets))
    newDataset[index].hidden = !newDataset[index].hidden

    chartData.value = {...chartData.value, datasets: newDataset}
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function generateRandomNumbers(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100); // 0부터 99까지의 랜덤 숫자 생성
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

export const useCharStatStore = defineStore('chartStat', () => {
    return {
        chartData,
        initData,
        addData,
    }
})
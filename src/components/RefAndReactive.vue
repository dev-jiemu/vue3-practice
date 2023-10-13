<template>
    <v-card>
        <v-card-text>
            {{ myData }}
        </v-card-text>
        <v-card-text>
            {{ myRecComputed }}
        </v-card-text>
        <v-card-text>
            {{ myMultiVarComputed }}
        </v-card-text>
        <v-card-text>
            {{ chartDataComputed }}
        </v-card-text>
        <v-card-text class="ma-2">
            <v-btn class="mr-2" @click="myVarUpdate">myVar</v-btn>
            <v-btn class="mr-2" @click="myReactviceUpdate">myReactive</v-btn>
            <v-btn class="mr-2" @click="myMultiVarUpdate">multiVar</v-btn>
            <v-btn class="mr-2" @click="chartDataUpdate">chartData</v-btn>
        </v-card-text>
    </v-card>
</template>
<script setup>
import {computed, onMounted, reactive, ref} from "vue";
import {useCharStatStore} from "/@store/ChartStat.js";

const contStat = useCharStatStore()

const myVar = ref('hello')

const myData = computed(() => {
    return myVar.value
})

const myReactvice = reactive({
    field1: '고정값',
    field2: 'update value'
})

const myRecComputed = computed(() => {
    return myReactvice
})

const multiVar = ref({
    value1: [{
        myField: 0
    }],
    value2: {}
})

const myMultiVarComputed = computed(() => {
    return multiVar.value
})

const chartDataComputed = computed(() => {
    return contStat.chartData
})

const updateCnt = ref(0)
function myVarUpdate() {
    myVar.value = 'update: ' + updateCnt.value
    updateCnt.value++
}

const reactUpdateCnt = ref(0)
function myReactviceUpdate() {
    myReactvice.field2 = 'update: ' + reactUpdateCnt.value
    reactUpdateCnt.value++
}

function myMultiVarUpdate() {
    multiVar.value.value1[0].myField = generateRandomNumbers(7)[0]
}

function chartDataUpdate() {
    contStat.addData()
}

function generateRandomNumbers(count) {
    const randomNumbers = [];
    for (let i = 0; i < count; i++) {
        const randomNumber = Math.floor(Math.random() * 100); // 0부터 99까지의 랜덤 숫자 생성
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

</script>

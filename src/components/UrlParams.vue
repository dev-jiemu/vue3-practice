<!-- Ref. https://stackoverflow.com/questions/35914069/how-can-i-get-query-parameters-from-a-url-in-vue-js -->
<template>
    <div>
        {{type}}
    </div>
    <div>
        {{query}}<br>
        {{query.name}}<br>
        {{query.assign}}
    </div>
</template>

<script setup>

import {useRoute} from "vue-router";
import {watch} from "vue";

const route = useRoute()
const type = route.params.type
const query = route.query

// route param값 변할때마다 watch로 감지
watch(() => route.params.type, (newType, oldType) => {
    console.log('new, old: ' + newType + ', ' + oldType)
})
</script>
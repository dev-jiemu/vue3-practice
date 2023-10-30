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

const route = useRoute()
const type = route.params.type
const query = route.query

</script>
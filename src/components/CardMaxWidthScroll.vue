<template>
    <v-container>
        <v-row class="bg-grey-lighten-4 ma-1">
            <v-col cols="7">
                <v-text-field density="compact" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn class="ma-1" variant="outlined" color="success" @click="addContent">GENERATE</v-btn>
            </v-col>
            <v-col cols="2">
                <v-switch color="blue" v-model="toggle" label="TAILING"></v-switch>
            </v-col>
        </v-row>
        <v-card width="100%" class="overflow-y-auto">
            <v-card-text>
                <template v-for="(item, index) in dummy" :key="index">
                    <v-row>
                        <v-col cols="2">
                            index : {{index}}
                        </v-col>
                        <v-col>
                            {{ item }}
                        </v-col>
                    </v-row>
                </template>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script setup>
import {ref} from "vue";
const toggle = ref(false)

const content = ref(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat urna vitae interdum hendrerit. Etiam eu posuere arcu. Nulla facilisi. Fusce a eros vitae purus interdum ultricies. Nunc congue nisl id auctor aliquet. Suspendisse tempus vehicula lacinia. Integer nisi diam, interdum iaculis sollicitudin sit amet, maximus eu sem. Sed felis lectus, sodales sed lectus condimentum, varius venenatis diam. Fusce ac blandit quam. Pellentesque consectetur luctus mi vitae finibus. Mauris viverra porta lectus, vitae sollicitudin nisi tincidunt interdum. Quisque sed tincidunt sem. Morbi convallis lorem sed sapien mollis, ut eleifend mi tristique.

Ut vitae quam dapibus enim placerat scelerisque in a dui. Phasellus porta venenatis imperdiet. Vestibulum blandit egestas nibh quis accumsan. Cras id dapibus velit. Suspendisse potenti. Ut a velit sed dui condimentum aliquam. Donec ultricies, elit sed feugiat fermentum, nulla nunc cursus orci, id scelerisque est purus ut ante. Donec consectetur blandit lectus in egestas.

Morbi tellus neque, tempor vitae hendrerit id, condimentum id ex. Quisque venenatis mollis pharetra. Nulla sollicitudin arcu at nisi euismod mattis. Nulla magna velit, malesuada ullamcorper velit vitae, egestas maximus ex. Curabitur vestibulum, nulla sit amet interdum dictum, velit felis tempus odio, at ornare dolor eros eget sapien. Maecenas sit amet ultricies nulla. Aliquam hendrerit pulvinar nunc ut iaculis. Praesent hendrerit rutrum sapien sollicitudin consectetur. Nullam bibendum dignissim ligula, eu bibendum nibh lobortis et. Etiam blandit nisi in fermentum molestie.

Aliquam id nunc vel arcu porta maximus. Quisque tempor nisi orci. Morbi rutrum magna eget turpis feugiat, sed hendrerit nunc mollis. Vivamus bibendum mauris a est scelerisque, nec facilisis turpis ultrices. Aliquam dignissim arcu eu elit interdum, ut tempus nulla consequat. Nullam vel tincidunt nulla. Nulla et feugiat nibh. Etiam ac nulla justo. Integer a arcu porta, mattis urna in, rutrum enim.

Nunc odio enim, condimentum ut luctus ac, fringilla quis risus. In hac habitasse platea dictumst. Donec libero mi, tincidunt nec libero id, facilisis ultrices erat. Sed id dui mattis felis aliquet facilisis. Maecenas id lorem eu elit tempus cursus in eget nunc. Duis velit enim, maximus non orci eu, sollicitudin pretium diam. Donec elementum luctus diam, et mollis risus egestas et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras ut eleifend elit, sit amet scelerisque eros. Donec eget justo at orci hendrerit iaculis. In tincidunt purus vitae bibendum accumsan. Donec non porttitor orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent pellentesque placerat lorem, et dictum est gravida nec. Maecenas pellentesque augue iaculis condimentum luctus. Phasellus fringilla ultrices purus quis ultricies.`)

const dummy = ref([])
dummy.value.push(content)

const addContent = () => {
    dummy.value.push(content)
    if (toggle.value) {
        scrollToBottom()
    }
}

const scrollToBottom = () => {
    // 최하단으로 스크롤 이동
    const container = document.querySelector(".overflow-y-auto")
    container.scrollTop = container.scrollHeight
}
</script>
import { createApp } from 'vue'
import { createPinia } from "pinia";
import { store } from '/@store/index.js'
import { router } from '/@router/router.js'
import App from '/@/App.vue'
import '/@/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'

const app = createApp(App)
const pinia = createPinia();

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

app.use(store)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.mount('#app')
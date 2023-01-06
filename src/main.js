import { createApp } from 'vue'
import { store } from '/@store'

import './index.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(store)
app.mount('#app')
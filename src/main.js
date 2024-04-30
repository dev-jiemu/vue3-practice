import { createApp } from 'vue'
import { createPinia } from "pinia";
import { store } from '/@store/index.js'
import { router } from '/@router/router.js'
import App from '/@/App.vue'
// import * as Sentry from "@sentry/vue";
import '/@/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.esm.min.js'
import piniaPluginPersistedState from "pinia-plugin-persistedstate"
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedState)

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

// Sentry.init({
//     app,
//     dsn: "https://[user_dsn_value]",
//     integrations: [
//         Sentry.browserTracingIntegration(),
//         Sentry.replayIntegration(),
//     ],
//     tracingOptions: { // 하위 구성 요소를 추적하고 렌더링 프로세스에 대한 자세한 내용을 보기
//         trackComponents: true,
//     },
//     attachProps: true, // 로깅을 위해 모든 Vue 구성 요소의 props를 보기
//     tracesSampleRate: 1, // 0에서 1 사이의 숫자로 주어진 트랜잭션이 Sentry로 전송 될 확률을 제어
// });

app.use(store)
app.use(router)
app.use(pinia)
app.use(vuetify)
app.use(VueApexCharts)
app.mount('#app')
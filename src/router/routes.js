import Profile from '/@components/Profile.vue'
import Application from '/@components/Application.vue'
import Home from '/@components/Home.vue'
import Admin from '/@components/Admin.vue'
import SelectBox from "../components/SelectBox.vue"
import SelectBoxVer2 from "/@components/SelectBoxVer2.vue";
import TextareaLimitLength from "/@components/TextareaLimitLength.vue";
import DatePicker from "/@components/DatePicker.vue"
import VueChartJsLine from "/@components/VueChartJsLine.vue";
import MultiChips from "/@components/MultiChips.vue"
import RefAndReactive from "/@components/RefAndReactive.vue"
import UrlParams from "/@components/UrlParams.vue";
import Vuetify3Picker from "/@components/Vuetify3Picker.vue";
import PiniaPersistedState from "/@components/PiniaPersistedState.vue";
import TextFieldList from "/@components/TextFieldList.vue"
import CardMaxWidthScroll from "/@components/CardMaxWidthScroll.vue";
import ApexCharts from "/@components/ApexCharts.vue";
import vuetifyPagination from '/@components/VuetifyPagination.vue'
import vuetifyTimeline from '/@components/VuetifyTimeline.vue'
import treeView from '/@components/TreeView.vue'

import { defineComponent } from 'vue'

const NotFound = defineComponent({
    template: "<div class='mt-2 text-center'>Not Found</div>",
})

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: Home },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/application', name: 'application', component: Application },
    { path: '/admin', name: 'admin', component: Admin },
    { path: '/select_box', name: 'select_box', component: SelectBox},
    { path: '/select_box_v2', name: 'select_box_v2', component: SelectBoxVer2},
    { path: '/textarea_limit', name: 'textarea_limit', component: TextareaLimitLength},
    { path: '/date_picker', name: 'date_picker', component: DatePicker },
    { path: '/vue_chart_js', name: 'vue_chart_js', component: VueChartJsLine },
    { path: '/multi_chips', name: 'multi_chips', component: MultiChips },
    { path: '/ref_and_reactive', name: 'ref_and_reactive', component: RefAndReactive },
    { path: '/vuetify_picker', name: 'vuetify_picker', component: Vuetify3Picker },
    { path: '/:catchAll(.*)+', component: NotFound },
    {
        path: '/url_params/:type',
        name: 'url_params',
        component: UrlParams
    },
    { path: '/pinia_persisted_state', name: 'pinia_persisted_state', component: PiniaPersistedState },
    { path: '/text_field_list', name: 'text_field_list', component: TextFieldList },
    { path: '/card_max_width_scroll', name: 'card_max_width_scroll', component: CardMaxWidthScroll },
    { path: '/apex_chart', name: 'apex_chart', component: ApexCharts },
    { path: '/vuetify_pagination', name: 'vuetify_pagination', component: vuetifyPagination },
    { path: '/vuetify_timeline', name: 'vuetify_timeline', component: vuetifyTimeline },
    { path: '/tree_view', name: 'tree_view', component: treeView },
]

export default routes
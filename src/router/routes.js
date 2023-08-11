import Profile from '/@components/Profile.vue'
import Application from '/@components/Application.vue'
import Home from '/@components/Home.vue'
import Admin from '/@components/Admin.vue'
import SelectBox from "../components/SelectBox.vue"
import SelectBoxVer2 from "/@components/SelectBoxVer2.vue";
import TextareaLimitLength from "/@components/TextareaLimitLength.vue";
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
    { path: '/:catchAll(.*)+', component: NotFound },
]

export default routes
<!--
    1. Cookie 에서 이메일, 토큰을 가져옴. 없으면 임의값 처리
    2. 이메일, 토큰을 서버로 보내 로그인/최초 정보 입력/자동 로그인 중 하나를 응답으로 받음
        1) 이메일, 토큰 일치하지 않으면 로그인 화면으로 돌아감
        2) 이메일, 비밀번호가 vue 이면 최초 정보 입력 화면을 호출함
        3) 이메일, 토큰이 일치하고 저장된 이메일이 vue가 아니라면 자동 로그인이 활성화 되었는지 확인 후 관리자 페이지 진입
-->
<template>
    <div v-if="state == 'ok'">
        <div class="row text-right pr-sm-2">
            <small><a href="#" @click="onLogout">Logout</a></small>
        </div>
        <editor/>
    </div>
    <div v-else-if="state == 'loading'">Loading...</div>
    <login v-else :email="email" :type="state" @state="state = 'ok'"/>
</template>

<script>
import {onBeforeMount, ref} from "vue";
import Login from '/@components/Login.vue'
import Editor from '/@components/Edit.vue'
import useLogin from '/@app_modules/login.js'
import { getCookie, setCookie } from '/@app_modules/cookie.js'

export default {
    components: {
      Login, Editor,
    },
    name: "Admin",
    setup() {
        const state = ref('loading')
        const email = ref(getCookie('email'))
        const token = ref(getCookie('token'))

        onBeforeMount(() => {
            const { checkToken } = useLogin()
            const auto_login = getCookie('stay') == 'true'

            email.value = email.value == '' ? 'test-email' : email.value
            token.value = token.value == '' ? 'test-token' : token.value

            checkToken(email.value, token.value).then((data) => {
                if (data.data == 'vue') {
                    state.value = 'update'
                    email.value = ''
                } else if (auto_login) {
                    state.value = 'ok'
                } else {
                    state.value = 'login'
                }
            }).catch((e) => {
                state.value = 'login'
            })
        })

        const onLogout = (evt) => {
            if(evt) {
                evt.preventDefault()
            }
            setCookie('token', '')
            state.value = 'login'
        }

        return {
            state, email, onLogout,
        }
    },
}
</script>
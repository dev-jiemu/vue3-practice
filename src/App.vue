<template>
    <v-app>
        <v-container>
            <v-row>
                <v-col cols="3">
                    <v-list>
                        <v-list-item>
                            <router-link to="/hello">1. Hello</router-link>
                        </v-list-item>
                        <v-list-item>
                            <router-link to="/mail_send">2. MailSend</router-link>
                        </v-list-item>
                    </v-list>
                </v-col>
                <v-col cols="9">
                    <router-view/>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
export default {
    name: 'App',
    components: {}
}
</script>
<template>
    <v-card>
        <v-card-title class="text-center">
            <h3 class="pa-3">Contact</h3>
        </v-card-title>
        <v-divider/>
        <v-card-text class="mt-10 ml-10 mr-10 mb-5">
            <v-row>
                <strong>이메일 전송 테스트 with AWS Lambda</strong>
            </v-row>
            <v-row class="pt-4">
                <v-col cols="2" class="mt-2">
                    Name*
                </v-col>
                <v-col cols="10">
                    <v-text-field v-model="form.name" density="compact"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="2" class="mt-2">
                    Organization
                </v-col>
                <v-col cols="10">
                    <v-text-field v-model="form.organization" density="compact"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="2" class="mt-2">
                    E-mail*
                </v-col>
                <v-col cols="10">
                    <v-text-field v-model="form.email" density="compact"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="2" class="mt-2">
                    Title*
                </v-col>
                <v-col cols="10">
                    <v-text-field v-model="form.title" density="compact"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="2" class="mt-2">
                    Inquiry*
                </v-col>
                <v-col cols="10">
                    <v-textarea variant="filled"
                                auto-grow
                                rows="4"
                                row-height="30"
                                shaped
                                v-model="form.inquiry"></v-textarea>
                </v-col>
            </v-row>
            <v-divider class="pt-5"/>
            <v-btn block color="success" @click="sendEmail">Send</v-btn>
        </v-card-text>
    </v-card>
</template>

<script setup>

import { reactive } from "vue";
import axios from "axios";

const form = reactive({
    name: '',
    organization: '',
    email: '',
    title: '',
    inquiry: ''
})

function sendEmail() {
    if (confirm('이메일을 전송하시겠습니까?')) {
        let url = 'aws-rambda-function-url'

        axios.post(url, JSON.stringify(form)).then((res) => {
            alert('완료되었습니다.')
            console.log(res)
        }).catch((e) => {
            console.log(e)
        })
    }
}

</script>

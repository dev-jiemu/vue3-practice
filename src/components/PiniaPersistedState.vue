<template>
    <v-container>
        <v-form v-model="valid">
            <v-container>
                <v-row>
                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-text-field
                            v-model="editFirstName"
                            :counter="10"
                            label="First name"
                            required
                            hide-details
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-text-field
                            v-model="editLastName"
                            :counter="10"
                            label="Last name"
                            hide-details
                            required
                        ></v-text-field>
                    </v-col>

                    <v-col
                        cols="12"
                        md="4"
                    >
                        <v-text-field
                            v-model="editEmail"
                            label="E-mail"
                            hide-details
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </v-container>
</template>
<script setup>
import {ref} from "vue";
import {useUsersStore} from "/@store/users.js";

const valid = ref(false)

const editFirstName = ref('')
const editLastName = ref('')
const editEmail = ref('')

const users = useUsersStore()

</script>
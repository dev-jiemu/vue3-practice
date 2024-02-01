import {defineStore} from "pinia";
import {ref} from "vue";

const firstName = ref('')
const lastName = ref('')
const email = ref('')

// computed

export const useUsersStore = defineStore('users', () => {
    return {
        firstName,
        lastName,
        email
    }
}, {persist: true})
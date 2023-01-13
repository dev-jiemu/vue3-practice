import { defineStore } from "pinia";
import useAxios from '/@app_modules/axios.js'

/*
export const about_me = {
    namespaced: true,
    state: () => ({
        name: null,
        email: null,
        resume: [],
    }),
    getters: {
        user_data: (state) => {
            return {
                name: state.name,
                email: state.email,
                resume: state.resume,
            }
        },
    },
    mutations: {
        SET_DATA(state, data) {
            state[data.key] = data.value
        },
    },
    actions: {
        setAboutMeData: ({ commit, state }, data) => {
            Object.keys(data).forEach((key) => {
                if (Object.keys(state).find((skey) => skey === key)) {
                    commit('SET_DATA', { key: key, value: data[key] })
                }
            })
        },
    },
}
*/

// 2023.01.13 vuex -> pinia
export const useAboutMeStore = defineStore('about-me', {
    state: () => ({
        name: null,
        email: null,
        resume: [],
    }),
    actions: {
        // $patch 메소드로 mutation 가능?
        setAboutMeData(items) {
            this.name = items.name
            this.email = items.email
            this.resume = items.resume
        },
    },
    getters: {
        getUserData: (state) => {
            return {
                name: state.name,
                email: state.email,
                resume: state.resume,
            }
        },
    },
})

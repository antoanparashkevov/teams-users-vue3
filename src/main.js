import { createApp } from 'vue'
import {createRouter,createWebHistory} from "vue-router";

const router = createRouter({
    history:createWebHistory(),
    routes:[]
})

import App from './App.vue'

createApp(App).mount('#app')

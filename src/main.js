import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Modal from "vue-bs-modal"

createApp(App).use(Toast).use(router).use(Modal).mount('#app')

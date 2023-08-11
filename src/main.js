import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/bi-1.9.1/bootstrap-icons.css'
import axios from 'axios'

window.axios = axios;

createApp(App).use(store).use(router).mount('#app')

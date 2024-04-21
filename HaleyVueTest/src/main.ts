import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Haley from "@haleyjs/vue";

createApp(App)
.use(Haley)
.mount('#app');

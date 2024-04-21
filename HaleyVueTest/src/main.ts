import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MessageDisplayer from '@haleyjs/vue';

createApp(App)
.use(MessageDisplayer)
.mount('#app');

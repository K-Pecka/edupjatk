import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css';

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router/index.js'
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';

const app = createApp(App)

app.directive('ripple', Ripple);
app.use(PrimeVue, { ripple: true });
app.use(createPinia())
app.use(router)

app.mount('#app')

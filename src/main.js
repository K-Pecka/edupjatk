import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from '@/router/index.js'
import PrimeVue from 'primevue/config';
import Ripple from 'primevue/ripple';

const app = createApp(App)

app.directive('ripple', Ripple);
app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true });

app.mount('#app')

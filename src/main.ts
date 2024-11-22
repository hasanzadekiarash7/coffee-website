import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import 'aos/dist/aos.css'
import 'mini-k-tailwind/skeleton.css';
const app = createApp(App);

// Initialize AOS
import AOS from 'aos';
// app.component('Icon', Icon)
app.mount('#app');
AOS.init();

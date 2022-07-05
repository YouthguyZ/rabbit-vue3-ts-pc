import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css'
import '@/assets/styles/common.less'
// 引入路由
import router from '@/router'
import { createPinia } from 'pinia'
const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')

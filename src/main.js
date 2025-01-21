import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 匯入路由

const app = createApp(App);

app.use(router); // 註冊路由
app.mount('#app');

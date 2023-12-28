import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
// import VueNativeSock from 'vue-native-websocket';

const app = createApp(App);

// 添加WebSocket插件配置
app.use(router)
// .use(VueNativeSock, 'ws://localhost:5000', {
//   format: 'json', // 可根据需要更改格式
//   reconnection: true, // 是否自动重新连接
//   reconnectionAttempts: 5, // 重新连接尝试次数
//   reconnectionDelay: 3000, // 重新连接延迟（毫秒）
// });

app.mount('#app');
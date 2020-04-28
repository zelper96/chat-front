import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js'


// socketIo 모듈 주소
import io from '../node_modules/socket.io-client';
// 서버 URL 주소
const socket = io('http://localhost:3000');

// server - connection 연결
Vue.prototype.$socket = socket;




Vue.config.productionTip = false;

new Vue({
    router,
    socket,
    render: h => h(App),


}).$mount('#app');

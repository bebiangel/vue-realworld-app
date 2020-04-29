import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { ApiService } from "@/module/api";

Vue.config.productionTip = false;
Vue.prototype.$http = ApiService;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

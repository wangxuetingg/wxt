import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import '@/style/index.css'
import '@/assets/iconfont/iconfont.css' //引入图标样式
import vant from 'vant' //引入vant
import 'vant/lib/index.css' //引入vant样式
import { Swipe, SwipeItem } from 'vant';
if (process.env.NODE_ENV === "development") {
    require("./mock")
}
Vue.config.productionTip = false;
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(vant)

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
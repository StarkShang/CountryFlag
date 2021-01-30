import Vue from "vue";
import App from "./App.vue";
import CountryFlag from "../lib";

Vue.config.productionTip = false;

Vue.use(CountryFlag);

new Vue({
    render: h => h(App)
}).$mount("#app");

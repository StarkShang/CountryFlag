import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// import "circle-flags/flags/us.svg";
// import "../node_modules/circle-flags/flags/us.svg";
import "./svg/us.svg";
// const req = require.context("circle-flags/flags", true, /\.svg$/);
// console.log(req);
// req.keys().map(req);

Vue.config.productionTip = false;

new Vue({
    store,
    render: h => h(App)
}).$mount("#app");

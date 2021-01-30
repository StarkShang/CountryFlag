import Vue from "vue";
import App from "./App.vue";
// import "./assets/svg/circle.svg";
// import "./svg/us.svg";
// import "circle-flags/flags/us.svg";
const req = require.context("circle-flags/flags", true, /\.svg$/);
req.keys().map(req);

Vue.config.productionTip = false;

new Vue({
    render: h => h(App)
}).$mount("#app");

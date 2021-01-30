import Vue from "vue";
import CountryFlag from "../components/CountryFlag.vue";
const req = require.context("circle-flags/flags", true, /\.svg$/);
req.keys().map(req);

function install() {
    Vue.component(CountryFlag.name, CountryFlag);
}

export default {
    install
}

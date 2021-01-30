import Vue, { VueConstructor } from "vue";
import CountryFlag from "./components/CountryFlag.vue";
const req = require.context("circle-flags/flags", true, /\.svg$/);
req.keys().map(req);

function install(vue: VueConstructor<Vue>) {
    vue.component(CountryFlag.name, CountryFlag);
}

export * from "./models";
export default install;

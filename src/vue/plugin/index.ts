import Vue, { VueConstructor } from "vue";
import CountryFlag from "./components/CountryFlag.vue";
import CountrySelector from "./components/CountrySelector.vue";
import "vue-multiselect/dist/vue-multiselect.min.css";

const req = require.context("circle-flags/flags", true, /\.svg$/);
req.keys().map(req);

function install(vue: VueConstructor<Vue>) {
    vue.component(CountryFlag.name, CountryFlag);
    vue.component(CountrySelector.name, CountrySelector);
}

export * from "./models";
export default install;

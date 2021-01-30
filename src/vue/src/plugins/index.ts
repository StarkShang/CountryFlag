import Vue from "vue";
import CountryFlag from "@/components/CountryFlag.vue";

function install() {
    Vue.component(CountryFlag.name, CountryFlag);
}

export default {
    install
}

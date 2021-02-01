<template>
    <div id="app">
        <country-flag height=12></country-flag>
        <country-selector style="width:100%" @select="selectCountry"></country-selector>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
    name: "App",
})
export default class App extends Vue {
    public selectCountry(country: any) {
        console.log(country);
    }
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <country-flag country="zh" type="circle"></country-flag>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CountryFlag from "./components/CountryFlag.vue";

@Component({
  name: "App",
  components: {
    CountryFlag,
  },
})
export default class App extends Vue {}
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

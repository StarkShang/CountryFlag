<template>
    <div>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-us"></use>
        </svg>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CountryCode, CountryFlagSize, CountryFlagType } from "../models";

@Component({
    name: "CountryFlag"
})
export default class CountryFlag extends Vue {
    @Prop() public country!: CountryCode;
    @Prop() public type!: CountryFlagType;
    @Prop() public size!: CountryFlagSize;
}
</script>

<style scoped lang="scss">

</style>

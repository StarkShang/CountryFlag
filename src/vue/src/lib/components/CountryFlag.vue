<template>
    <div>
        <svg class="icon" aria-hidden="true">
            <use :xlink:href="flagId"></use>
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

    public get flagId() {
        return `#${this.type}_${this.country}`;
    }
}
</script>

<style scoped lang="scss">

</style>

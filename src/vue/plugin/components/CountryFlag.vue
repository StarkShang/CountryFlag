<template>
    <svg aria-hidden="true" :width="width" :height="height">
        <use :xlink:href="flagId"></use>
    </svg>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CountryCode, CountryFlagType } from "../models";

@Component({
    name: "CountryFlag"
})
export default class CountryFlag extends Vue {
    @Prop({ default: "cn", required: false }) public country!: CountryCode;
    @Prop({ default: "circle", required: false }) public type!: CountryFlagType;
    @Prop({ required: false }) public width?: number;
    @Prop({ required: false }) public height?: number;

    public get flagId() {
        return `#${this.type}_${this.country}`;
    }
}
</script>

<style scoped lang="scss">

</style>

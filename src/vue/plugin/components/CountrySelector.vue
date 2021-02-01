<template>
    <div class="country-selector">
        <v-select v-model="selected" label="name"
            :options="countries"
            :placeholder="placeholder"
            :internal-search="false"
            :limit="limit"
            :limit-text="limitText"
            :options-limit="optionsLimit"
            @search-change="searchCountry"
            @select="selectCountry">
            <template v-slot:option="{ option }">
                <div class="coutry-option">
                    <country-flag class="country-flag" :country="option.code | lower"></country-flag>
                    {{ option.name }}
                </div>
            </template>
        </v-select>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Multiselect from "vue-multiselect";
import countriesData from "../data/countries.json";
import { Country } from "../models";

@Component({
    name: "CountrySelector",
    components: {
        "v-select": Multiselect
    },
    filters: {
        lower: (data: string) => data.toLowerCase()
    }
})
export default class CountrySelector extends Vue {
    @Prop({ default: "选择国家" }) public placeholder!: string;
    @Prop() public limit?: number;
    @Prop({ default: () => (count: number) => `...以及其余${count}个国家` }) public limitText?: string;
    @Prop() public optionsLimit?: number;

    public countries: Country[] = countriesData as Country[];
    public selected: any = "";

    public searchCountry(keyword: string) {
        if (keyword) {
            this.countries = (countriesData as Country[]).filter(country =>
                (country.name as string)?.includes(keyword) ||
                (country.en as string)?.toLowerCase().includes(keyword.toLowerCase())
            );
        } else {
            this.countries = countriesData as Country[];
        }
    }

    public selectCountry(country: Country) {
        this.$emit("select", country);
    }
}
</script>

<style scoped lang="scss">
.country-selector {
    display: inline-block;
}
.coutry-option {
    display: flex;
    align-items: center;
}
.country-flag {
    width: 0.8em;
    height: 0.8em;
    margin-right: 0.5em;
}
</style>

<template>
    <div class="country-selector">
        <v-select v-model="selected" label="name"
            :options="countries"
            :placeholder="placeholder"
            :internal-search="false"
            :limit="3"
            :limit-text="limitText"
            :options-limit="5"
            @search-change="searchCountry">
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
    public countries: any[] = [];
    public selected: any = "";
    public limitText(count: number) {
        return `...以及其余${count}个国家`
    }

    public searchCountry(keyword: string) {
        if (keyword) {
            this.countries = countriesData.filter(country =>
                (country.name as string)?.includes(keyword) ||
                (country.en as string)?.toLowerCase().includes(keyword.toLowerCase())
            );
        } else {
            this.countries = countriesData;
        }
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

export type CountryFlagType = "regular" | "circle";
export type CountryCode = string;

export interface Country {
    name: string;
    en: string;
    code: CountryCode;
}

import { exportJson, extract, loadJson, modifyKey } from "./utils";

const countries = loadJson("../repository/country.json") as [Record<string, any>];
const keyMap: Record<string, string> = {
    "zh-Hans-CN": "name",
    "en-US": "en",
    "alpha2-code": "code",
}
const result: any[] = [];
countries.forEach(country => {
    result.push(extract(country, keyMap));
});

exportJson("./asdasd.json", result);


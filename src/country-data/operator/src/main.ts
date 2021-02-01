import { exportJson, loadJson, modifyKey } from "./utils";

const countries1 = loadJson("../../repository/country.json") as [Record<string, any>];
const countries2 = loadJson("../../repository/country-2.json") as [Record<string, any>];

countries2.forEach(country => {
    const c = countries1.find(c => c["en-US"] === country["en"]);
    if (c) {
        c["zh-Hans-CN"] = country["cn"];
        c["calling-code"] = country["dialing_code"];
    }
});

exportJson("../../repository/country123.json", countries1);

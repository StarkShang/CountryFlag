import fs from "fs";

export function loadJson(path: string, encoding: BufferEncoding = "utf-8"): any {
    const text = fs.readFileSync(path, encoding);
    return JSON.parse(text);
}

export function exportJson(path: string, json: any): void {
    const text = JSON.stringify(json, null, 4);
    fs.writeFileSync(path, text);
}

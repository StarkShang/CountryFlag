export function modifyKey(obj: Record<string, any>, keyMap: Record<string, string>): void {
    for(const oldKey in obj) {
        const newKey = keyMap[oldKey];
        if(newKey) {
            obj[newKey] = obj[oldKey];
            delete obj[oldKey];
        }
    }
}

export function extract(obj: Record<string, any>, keyMap: Record<string, string>): Record<string, any> {
    const duplicate = {} as Record<string, any>;
    for(const oldKey in obj) {
        const newKey = keyMap[oldKey];
        if(newKey) {
            duplicate[newKey] = obj[oldKey];
        }
    }
    return duplicate;
}

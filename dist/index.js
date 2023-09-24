/**
 * @author     Carl Viktor Svensson
 * @license    Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */
import { data } from "./data";
export class BaseEntry {
}
/**
 * Creates an API data source.
 * @param config
 * @returns
 */
export default async function Scrapiloo(config) {
    const $fetch = config?.fetch ?? fetch;
    const response = await $fetch(`${config.endpoint}?dataset=${config.dataset}`);
    const apiOutput = (await response.json());
    const entries = apiOutput.data;
    const schema = apiOutput.schema;
    /**
     * Retrieves all entries
     * @returns
     */
    function all() {
        return Array.from(new Set(Object.keys(entries).map((key) => key.split(":")[0])).values()).map((key) => {
            return get(key);
        });
    }
    function deepAssign(obj, path, value) {
        const sub = path.split(":");
        let target = obj;
        for (const s of sub.slice(0, -1)) {
            target[s] = target[s] ?? {};
            target = target[s];
        }
        target[sub[sub.length - 1]] = value;
        return obj;
    }
    /**
     * Retrieves an entry with the specified `key`.
     * @param key
     * @returns
     */
    function get(key) {
        const res = new config.prototype();
        res.__key = entries[`${key}:__key`];
        for (const [ref, def] of Object.entries(schema)) {
            const entryKey = `${key}:${ref}`;
            let $data = data(entryKey in entries ? entries[entryKey] : def.default, def.type);
            $data = !$data.isNull() ? $data : data(def.default, def.type);
            deepAssign(res, ref, $data);
        }
        return res;
    }
    return { get, all };
}

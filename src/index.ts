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

import {type ScrapilooLoan} from "./ScrapilooLoan";
import {ScrapilooPetInsurance} from "./ScrapilooPetInsurance";
import {data} from "./data";
import {type TypeName} from "./types/DataType";

export type * from "./ScrapilooLoan";
export type * from "./types";

export {data} from "./data";

export class BaseEntry {}

interface ScrapilooDatasetMap {
  loans: ScrapilooLoan;
  pet_insurances: ScrapilooPetInsurance;
}

/**
 * Creates an API data source.
 * @param config
 * @returns
 */
export default async function Scrapiloo<
  D extends keyof ScrapilooDatasetMap,
  B extends BaseEntry = BaseEntry,
  T extends ScrapilooDatasetMap[D] = ScrapilooDatasetMap[D]
>(config: {
  /**
   * Dataset key.
   */
  dataset: D;

  /**
   * Implementation of the `fetch` API that should be used
   * to make requests. Provide a specific function in order
   * to intercept requests for caching purposes etc.
   */
  fetch?: typeof fetch;

  /**
   * API endpoint URL.
   */
  endpoint: string;

  /**
   * A class prototype that all attributes will be assigned
   * to.
   */
  prototype: {new (): B};
}) {
  const $fetch = config?.fetch ?? fetch;
  const response = await $fetch(`${config.endpoint}?dataset=${config.dataset}`);
  const apiOutput = (await response.json()) as {
    success: boolean;
    schema: {
      [key: string]: {type: TypeName; default: string | number | boolean};
    };
    data: {[key: string]: string | number | boolean};
  };

  const entries: {[key: string]: string | number | boolean} = apiOutput.data;
  const schema: {
    [key: string]: {type: TypeName; default: string | number | boolean};
  } = apiOutput.schema;

  /**
   * Retrieves all entries
   * @returns
   */
  function all(): (T & B)[] {
    return Array.from(
      new Set(Object.keys(entries).map((key) => key.split(":")[0])).values()
    ).map((key) => {
      return get(key);
    });
  }

  function deepAssign(obj: any, path: string, value: any) {
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
  function get(key: string): T & B {
    const res: any = new config.prototype();
    res.__key = entries[`${key}:__key`];
    for (const [ref, def] of Object.entries(schema)) {
      const entryKey = `${key}:${ref}`;

      let $data = data(
        entryKey in entries ? entries[entryKey] : def.default,
        def.type
      );

      $data = !$data.isNull() ? $data : data(def.default, def.type);

      deepAssign(res, ref, $data);
    }

    return res;
  }

  return {get, all};
}

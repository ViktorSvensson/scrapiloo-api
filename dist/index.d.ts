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
import { type ScrapilooLoan } from "./ScrapilooLoan";
import { ScrapilooPetInsurance } from "./ScrapilooPetInsurance";
export type * from "./ScrapilooLoan";
export type * from "./types";
export { data } from "./data";
export declare class BaseEntry {
}
interface ScrapilooDatasetMap {
    loans: ScrapilooLoan;
    pet_insurance: ScrapilooPetInsurance;
}
/**
 * Creates an API data source.
 * @param config
 * @returns
 */
export default function Scrapiloo<D extends keyof ScrapilooDatasetMap, B extends BaseEntry = BaseEntry, T extends ScrapilooDatasetMap[D] = ScrapilooDatasetMap[D]>(config: {
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
    prototype: {
        new (): B;
    };
}): Promise<{
    get: (key: string) => T & B;
    all: () => (T & B)[];
}>;

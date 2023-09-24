/**
 * @author     Carl Viktor Svensson
 * @author     Kelsie Maria Enqvist
 * @license    Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */
import { DataTypeImpl } from "./DataTypeImpl";
export class DateTypeImpl extends DataTypeImpl {
    getYear() {
        throw new Error("Method not implemented.");
    }
    getMonth() {
        throw new Error("Method not implemented.");
    }
    getDay() {
        throw new Error("Method not implemented.");
    }
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}

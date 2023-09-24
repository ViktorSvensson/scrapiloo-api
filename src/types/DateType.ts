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

import type {DataType} from "./DataType";

export interface DateType extends DataType<string> {
  readonly type: "date";
  readonly value: string;

  /**
   * Returns the `year` component of the date.
   */
  getYear(): number;

  /**
   * Returns the `month` component of the date.
   */
  getMonth(): number;
  getDay(): number;
}

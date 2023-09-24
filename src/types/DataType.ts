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

import type {ReactNode} from "react";

export type TypeName =
  | "string"
  | "integer"
  | "boolean"
  | "unit"
  | "time"
  | "url"
  | "image"
  | "float"
  | "currency"
  | "date";

export interface DataType<T extends unknown = unknown, C = {}> {
  /**
   * Printed object name when debugging. Should contain stringified
   * primitive value.
   */
  [Symbol.toStringTag]: string;

  /**
   * The value.
   */
  readonly value: T;

  /**
   * Data type name.
   */
  readonly type: TypeName;

  /**
   * Config.
   */
  readonly config: C;

  /**
   * Returns a cloned object with provided config params.
   * @param config
   */
  setConfig(config: Partial<this["config"]>): this & DataType<T>;

  /**
   * Returns a cloned object with same config params.
   */
  clone(): this;

  /**
   * Returns raw value.
   */
  valueOf(): T;

  /**
   * Returns the value formatted as a string or a React Node.
   */
  pretty(): string | ReactNode;

  /**
   * Checks if value is null.
   */
  isNull(): boolean;

  /**
   * Returns a sortable (numeric) version of the value.
   */
  toSortable(): number;

  /**
   * Returns a stringified value.
   */
  toString(): string;

  /**
   * Returns a serializable representation of the DataType.
   */
  toJSON(): object;
}

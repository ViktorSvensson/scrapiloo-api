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

import type {ImageType} from "../types";
import {DataTypeImpl} from "./DataTypeImpl";

export class ImageTypeImpl
  extends DataTypeImpl<string, "image">
  implements ImageType
{
  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}

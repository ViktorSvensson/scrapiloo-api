import type {URLType} from "../types";
import {DataTypeImpl} from "./DataTypeImpl";

export class URLTypeImpl
  extends DataTypeImpl<`https://${string}`, "url">
  implements URLType
{
  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}

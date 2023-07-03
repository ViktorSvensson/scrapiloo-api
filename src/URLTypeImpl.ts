import {DataTypeImpl} from "./DataTypeImpl";
import {URLType} from "./URLType";

export class URLTypeImpl
  extends DataTypeImpl<`https://${string}`, "url">
  implements URLType
{
  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}

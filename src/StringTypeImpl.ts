import {DataTypeImpl} from "./DataTypeImpl";
import {StringType} from "./StringType";

export class StringTypeImpl
  extends DataTypeImpl<string, "string">
  implements StringType
{
  pretty(): string {
    if (this.isNull()) return "–";
    return this.valueOf();
  }
  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}

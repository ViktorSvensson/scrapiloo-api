import {CurrencyType} from "./CurrencyType";
import {DataTypeImpl} from "./DataTypeImpl";

export class CurrencyTypeImpl
  extends DataTypeImpl<string, "currency">
  implements CurrencyType
{
  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}

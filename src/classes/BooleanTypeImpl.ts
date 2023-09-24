import {data} from "../data";
import type {BooleanType, BooleanTypeConfig} from "../types";
import {DataTypeImpl} from "./DataTypeImpl";

export class BooleanTypeImpl
  extends DataTypeImpl<boolean, "boolean", BooleanTypeConfig>
  implements BooleanType
{
  protected defaultConfig: BooleanTypeConfig = {
    trueLabel: "Ja",
    falseLabel: "Nej",
  };
  pretty() {
    if (this.value === true) return this.config.trueLabel;
    if (this.value === false) return this.config.falseLabel;
    return "–";
  }

  isNull(): boolean {
    return !(this.value === false || this.value === true);
  }

  negate(strict = false): this {
    if (strict && this.isNull()) return this;
    return data(!this.value, this.type) as BooleanType & this;
  }
}

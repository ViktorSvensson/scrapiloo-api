import {BooleanType, data} from ".";
import {DataTypeImpl} from "./DataTypeImpl";

export class BooleanTypeImpl extends DataTypeImpl<boolean, "boolean"> {
  pretty() {
    if (this.value === true) return "Ja";
    if (this.value === false) return "Nej";
    return "–";
  }

  isNull(): boolean {
    return !(this.value === false || this.value === true);
  }

  negate(strict = false): BooleanType {
    if (strict && this.isNull()) return this;
    return data(!this.value, this.type) as this;
  }
}

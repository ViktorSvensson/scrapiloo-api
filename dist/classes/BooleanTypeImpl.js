import { data } from "../data";
import { DataTypeImpl } from "./DataTypeImpl";
export class BooleanTypeImpl extends DataTypeImpl {
    defaultConfig = {
        trueLabel: "Ja",
        falseLabel: "Nej",
    };
    pretty() {
        if (this.value === true)
            return this.config.trueLabel;
        if (this.value === false)
            return this.config.falseLabel;
        return "–";
    }
    isNull() {
        return !(this.value === false || this.value === true);
    }
    negate(strict = false) {
        if (strict && this.isNull())
            return this;
        return data(!this.value, this.type);
    }
}

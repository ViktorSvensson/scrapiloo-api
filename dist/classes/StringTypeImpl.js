import { DataTypeImpl } from "./DataTypeImpl";
export class StringTypeImpl extends DataTypeImpl {
    pretty() {
        if (this.isNull())
            return "–";
        return this.valueOf();
    }
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}

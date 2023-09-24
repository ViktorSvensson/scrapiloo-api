import { DataTypeImpl } from "./DataTypeImpl";
export class CurrencyTypeImpl extends DataTypeImpl {
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}

import { DataTypeImpl } from "./DataTypeImpl";
export class URLTypeImpl extends DataTypeImpl {
    isNull() {
        return typeof this.value !== "string" || this.value.length === 0;
    }
}

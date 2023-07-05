import { DataType } from "./DataType";
export interface BooleanType extends DataType<boolean> {
    readonly type: "boolean";
    readonly value: boolean;
    /**
     * Returns a new BooleanType with value set the inverse
     * of the current value.
     * @param strict If current value is `null`, the
     * negated value will be set to `true` unless `strict`
     * is set to `true`. @default false
     */
    negate(strict?: boolean): BooleanType;
}

import type { ReactNode } from "react";
import { DataType } from "./DataType";
export interface BooleanTypeConfig {
    trueLabel: string | ReactNode;
    falseLabel: string | ReactNode;
}
export interface BooleanType extends DataType<boolean> {
    readonly type: "boolean";
    readonly value: boolean;
    readonly config: BooleanTypeConfig;
    setConfig(config: Partial<BooleanTypeConfig>): this & BooleanType;
    /**
     * Returns a new BooleanType with value set the inverse
     * of the current value.
     * @param strict If current value is `null`, the
     * negated value will be set to `true` unless `strict`
     * is set to `true`. @default false
     */
    negate(strict?: boolean): this & BooleanType;
}

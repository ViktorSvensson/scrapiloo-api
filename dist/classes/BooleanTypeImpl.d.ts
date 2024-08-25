import type { BooleanType, BooleanTypeConfig } from "../types";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class BooleanTypeImpl extends DataTypeImpl<boolean, "boolean", BooleanTypeConfig> implements BooleanType {
    protected defaultConfig: BooleanTypeConfig;
    pretty(): import("react").ReactNode;
    isNull(): boolean;
    negate(strict?: boolean): this;
}

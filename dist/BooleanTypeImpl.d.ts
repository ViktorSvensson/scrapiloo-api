import { BooleanType } from ".";
import { DataTypeImpl } from "./DataTypeImpl";
export declare class BooleanTypeImpl extends DataTypeImpl<boolean, "boolean"> {
    pretty(): "–" | "Ja" | "Nej";
    isNull(): boolean;
    negate(strict?: boolean): BooleanType;
}

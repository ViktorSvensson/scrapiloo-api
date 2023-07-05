import { TypeName } from ".";
import { DataType } from "./DataType";
export declare abstract class DataTypeImpl<T extends string | number | boolean | null = string | number | boolean | null, TN extends TypeName = TypeName, C extends {} = {}> implements DataType<T, C> {
    #private;
    readonly value: T;
    readonly type: TN;
    protected defaultConfig: C;
    get config(): C;
    constructor(value: T, type: TN);
    setConfig(config: this["config"]): this;
    clone(): this;
    get [Symbol.toStringTag](): string;
    valueOf(): T;
    pretty(): string;
    toString(): string;
    isNull(): boolean;
    toSortable(): number;
}

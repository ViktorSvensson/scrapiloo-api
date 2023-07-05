export type TypeName = "string" | "integer" | "boolean" | "unit" | "time" | "url" | "image" | "float" | "currency" | "date";
export interface DataType<T extends unknown = unknown, C = {}> {
    /**
     * Printed object name when debugging. Should contain stringified
     * primitive value.
     */
    [Symbol.toStringTag]: string;
    /**
     * The value.
     */
    readonly value: T;
    /**
     * Data type name.
     */
    readonly type: TypeName;
    /**
     * Config.
     */
    readonly config: C;
    /**
     * Returns a cloned object with provided config params.
     * @param config
     */
    setConfig(config: Partial<this["config"]>): this;
    /**
     * Returns a cloned object with same config params.
     */
    clone(): this;
    /**
     * Returns raw value.
     */
    valueOf(): T;
    /**
     * Returns the value formatted as a string.
     */
    pretty(): string;
    /**
     * Checks if value is null.
     */
    isNull(): boolean;
    /**
     * Returns a sortable (numeric) version of the value.
     */
    toSortable(): number;
    /**
     * Returns a stringified value.
     */
    toString(): string;
}

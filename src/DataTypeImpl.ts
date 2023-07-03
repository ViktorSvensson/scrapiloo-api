import {TypeName, data} from ".";
import {DataType} from "./DataType";

export abstract class DataTypeImpl<
  T extends string | number | boolean | null = string | number | boolean | null,
  TN extends TypeName = TypeName,
  C extends {} = {}
> implements DataType<T, C>
{
  #config: C;
  protected defaultConfig: C = {} as C;

  get config(): C {
    return {...(this.#config ?? this.defaultConfig)} as C;
  }

  constructor(readonly value: T, readonly type: TN) {}

  setConfig(config: this["config"]): this {
    const clone = this.clone();
    clone.#config = {...clone.#config, ...config};
    return clone;
  }

  clone(): this {
    const clone = data(this.valueOf(), this.type) as any as this;
    clone.#config = {...this.config};
    return clone;
  }

  get [Symbol.toStringTag]() {
    return `${this.value}`;
  }

  valueOf(): T {
    return this.value;
  }

  pretty(): string {
    throw new Error("Method not implemented.");
  }

  toString(): string {
    return this.pretty();
  }

  isNull(): boolean {
    throw new Error("Method not implemented.");
  }

  toSortable(): number {
    throw new Error("Method not implemented.");
  }
}

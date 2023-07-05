import { DataType } from "./DataType";
export interface ImageType extends DataType<string> {
    readonly type: "image";
    readonly value: string;
}

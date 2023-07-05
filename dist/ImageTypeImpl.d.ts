import { DataTypeImpl } from "./DataTypeImpl";
import { ImageType } from "./ImageType";
export declare class ImageTypeImpl extends DataTypeImpl<string, "image"> implements ImageType {
    isNull(): boolean;
}

import {DataTypeImpl} from "./DataTypeImpl";
import {ImageType} from "./ImageType";

export class ImageTypeImpl
  extends DataTypeImpl<string, "image">
  implements ImageType
{
  isNull(): boolean {
    return typeof this.value !== "string" || this.value.length === 0;
  }
}

import {CountType} from "../constants/count.type";
import {MaterialType} from "../constants/material.type";
import {ProcessType} from "../constants/process.type";
import {BlendType} from "../constants/blend.type";
import {SpinningTechType} from "../constants/spinning.tech.type";
import {EnduseType} from "../constants/enduse.type";
import {MaterialBlendType} from "../constants/material.blend.type";

export class NewProduct {
  name: string;
  description: string;
  count: CountType;
  materialType: MaterialType;
  processType: ProcessType;
  blendType: BlendType;
  spinningTechType: SpinningTechType;
  enduseType: EnduseType;
  materialBlendType: MaterialBlendType

  public constructor(init?: Partial<NewProduct>) {
    Object.assign(this, init);
  }
}

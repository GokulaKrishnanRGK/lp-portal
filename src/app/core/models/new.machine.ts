import {MachineType} from "../constants/machine.type";
import {MachineModel} from "../constants/machine.model";
import {MachineMake} from "../constants/machine.make";

export class NewMachine {
  name: string;
  type: MachineType;
  model: MachineModel;
  make: MachineMake;
  year: number;

  public constructor(init?: Partial<NewMachine>) {
    Object.assign(this, init);
  }
}

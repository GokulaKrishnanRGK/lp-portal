import {MachineMake} from "../constants/machine.make";
import {MachineModel} from "../constants/machine.model";
import {MachineType} from "../constants/machine.type";

export class Machine {
  machineId: number;
  millId: number;
  name: string;
  make: MachineMake;
  model: MachineModel;
  year: number;
  type: MachineType;
}

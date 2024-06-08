import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {BackButtonComponent} from "../../core/components/back-button/back-button.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewMachine} from "../../core/models/new.machine";
import {MachineService} from "../../core/services/machine.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {LpBoxComponent} from "../../core/components/lp-box/lp-box.component";
import {LpFormFieldComponent} from "../../core/components/lp-form-field/lp-form-field.component";
import {MatHint} from "@angular/material/form-field";
import {NgClass} from "@angular/common";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {MatButton} from "@angular/material/button";
import {MatOption, MatSelect} from "@angular/material/select";
import {MachineType} from "../../core/constants/machine.type";
import {MachineMake} from "../../core/constants/machine.make";
import {MachineModel} from "../../core/constants/machine.model";

@Component({
  selector: 'app-new-machine',
  standalone: true,
  imports: [
    MatToolbar,
    BackButtonComponent,
    ReactiveFormsModule,
    LpBoxComponent,
    LpFormFieldComponent,
    MatHint,
    NgClass,
    FaIconComponent,
    MatButton,
    RouterLink,
    FormsModule,
    MatSelect,
    MatOption
  ],
  templateUrl: './new-machine.component.html',
  styleUrl: './new-machine.component.scss'
})
export class NewMachineComponent implements OnInit {

  newMachineForm: FormGroup;
  newMachineConfig: NewMachine;
  //TODO: will be read from db
  machineTypes: MachineType[] = [MachineType.BALEOPENER, MachineType.PRECLEANER, MachineType.MIXER]
  machineMakes: MachineMake[] = [MachineMake.MAKE1, MachineMake.MAKE2]
  machineModels: MachineModel[] = [MachineModel.MODEL1, MachineModel.MODEL2]

  constructor(private machineService: MachineService, private ar: ActivatedRoute,) {
  }

  ngOnInit() {
    this.newMachineForm = new FormGroup({
      name: new FormControl(''),
      type: new FormControl(0),
      make: new FormControl(0),
      model: new FormControl(0),
      year: new FormControl(0)
    });
  }

  submitNewMachine(): void {
    this.newMachineConfig = new NewMachine(this.newMachineForm.value);
    this.machineService.saveMachine(this.newMachineConfig, this.ar);
  }

}

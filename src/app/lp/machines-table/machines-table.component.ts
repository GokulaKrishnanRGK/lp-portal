import {Component, OnInit} from '@angular/core';
import {LpApiService} from "../../core/services/lp-api.service";
import {MachineService} from "../../core/services/machine.service";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {Machine} from "../../core/models/machine";
import {DataRequest} from "../../core/models/data.request";
import {DataResponse} from "../../core/models/data.response";
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-machines-table',
  standalone: true,
  imports: [
    MatTable,
    NgClass,
    MatRow,
    MatRowDef,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    NgStyle,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatHeaderCellDef
  ],
  templateUrl: './machines-table.component.html',
  styleUrl: './machines-table.component.scss'
})
export class MachinesTableComponent implements OnInit {

  machines: MatTableDataSource<Machine>;
  columnDefs = ['_name', '_make', '_model', '_year', '_type'];

  constructor(private apiService: LpApiService, private machineService: MachineService) {
  }

  ngOnInit() {
    this.fetchMachines();
  }

  fetchMachines = () => {
    const dr = new DataRequest('/machine');
    this.apiService.read(dr).subscribe((d: DataResponse) => {
      const machines = d.body as Machine[];
      this.machines = new MatTableDataSource<Machine>(machines);
    });
  }

}

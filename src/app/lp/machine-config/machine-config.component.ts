import {Component, OnInit} from '@angular/core';
import {BackButtonComponent} from "../../core/components/back-button/back-button.component";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";
import {MachinesTableComponent} from "../machines-table/machines-table.component";

@Component({
  selector: 'app-machine-config',
  standalone: true,
  imports: [
    BackButtonComponent,
    MatToolbar,
    RouterLink,
    MatAnchor,
    MachinesTableComponent
  ],
  templateUrl: './machine-config.component.html',
  styleUrl: './machine-config.component.scss'
})
export class MachineConfigComponent implements OnInit {


  ngOnInit() {
  }

}

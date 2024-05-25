import {Component, OnInit} from '@angular/core';
import {BackButtonComponent} from "../../core/components/back-button/back-button.component";
import {MatToolbar} from "@angular/material/toolbar";

@Component({
  selector: 'app-machine-config',
  standalone: true,
  imports: [
    BackButtonComponent,
    MatToolbar
  ],
  templateUrl: './machine-config.component.html',
  styleUrl: './machine-config.component.scss'
})
export class MachineConfigComponent implements OnInit {


  ngOnInit() {
  }

}

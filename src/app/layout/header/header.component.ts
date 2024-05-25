import {Component, Input, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatSidenav} from "@angular/material/sidenav";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    RouterLink,
    MatIconButton,
    MatMiniFabButton,
    RouterLinkActive,
    MatTooltip
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  ngOnInit(): void {

  }

}

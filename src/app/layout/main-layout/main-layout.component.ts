import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {RouterOutlet} from "@angular/router";
import {SidenavService} from "../sidenav.service";
import {SidebarComponent} from "../sidebar/sidebar.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    MatSidenavContainer,
    RouterOutlet,
    SidebarComponent,
    MatSidenav,
    MatSidenavContent
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {

  public onSideNavChange: boolean = false;

  constructor(
    private sideNavService: SidenavService,
  ) {
    this.sideNavService.sideNavState$.subscribe(res => {
      this.onSideNavChange = res;
    });
  }

  ngOnInit(): void {}

}

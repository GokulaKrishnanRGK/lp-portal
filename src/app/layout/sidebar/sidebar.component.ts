import {Component, OnInit} from '@angular/core';
import {MatListItem, MatNavList} from "@angular/material/list";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";
import {SidenavService} from "../sidenav.service";
import {MatDivider} from "@angular/material/divider";
import {MatIconButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";

export interface Page {
  id: string;
  link: string;
  name: string;
  featureIcon: string;
  permission: string;
  iconType: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatNavList,
    RouterLink,
    RouterLinkActive,
    MatTooltip,
    MatIcon,
    MatDivider,
    MatIconButton,
    NgIf,
    MatListItem,
    NgForOf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  public sideNavState = false;
  public linkText = false;

  public pages: Page[] = [
    {
      id: 'REPORTS',
      name: 'Dashboard',
      link: '/',
      featureIcon: 'dashboard',
      permission: 'mill.home',
      iconType: 'mat',
    }
  ];

  constructor(
    private sidenavService: SidenavService,
  ) {
  }

  ngOnInit(): void {

  }

  onSideNavToggle(): void {
    this.sideNavState = !this.sideNavState;

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200);
    this.sidenavService.sideNavState$.next(this.sideNavState);
  }

}

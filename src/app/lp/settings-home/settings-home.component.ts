import {Component, OnInit} from '@angular/core';
import {IconName, IconPrefix} from '@fortawesome/fontawesome-common-types';
import {MatDrawerContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {BackButtonComponent} from "../../core/components/back-button/back-button.component";
import {NgForOf} from "@angular/common";

class AppSetting {
  id: number;
  name: string;
  logo: [IconPrefix, IconName];
  type: string;
  url: string;
  subTitle: string;

  constructor(
    id: number,
    name: string,
    logo: [IconPrefix, IconName],
    type: string,
    url: string,
    subTitle: string
  ) {
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.type = type;
    this.url = url;
    this.subTitle = subTitle;
  }
}

@Component({
  selector: 'app-settings-home',
  standalone: true,
  imports: [
    MatDrawerContainer,
    MatToolbar,
    RouterLink,
    FaIconComponent,
    BackButtonComponent,
    NgForOf
  ],
  templateUrl: './settings-home.component.html',
  styleUrl: './settings-home.component.scss'
})
export class SettingsHomeComponent implements OnInit {

  settings: AppSetting[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.settings.push(
      new AppSetting(
        1,
        'Machine Configuration',
        ['far', 'bell'],
        '',
        '/app/machine-config',
        'Manage mill machines'
      )
    );
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {QueryParamsHandling, RouterLink} from "@angular/router";
import {Location, NgIf} from '@angular/common';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

@Component({
  selector: 'app-back-button',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    MatIconButton,
    NgIf
  ],
  templateUrl: './back-button.component.html',
  styleUrl: './back-button.component.scss'
})
export class BackButtonComponent implements OnInit {

  @Input() toUrl?: any;
  @Input() mergeParams?: QueryParamsHandling;
  @Input() params: any;
  @Input() useLocation: boolean | undefined;

  constructor(public location: Location) {
  }

  ngOnInit(): void {
    if (this.useLocation) {
      this.toUrl = '';
    }
  }

  goBack() {
    if (this.useLocation) {
      this.location.back();
    }
  }

}

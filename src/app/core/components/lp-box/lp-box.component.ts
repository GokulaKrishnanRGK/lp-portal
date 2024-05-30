import {Component, Input, OnInit} from '@angular/core';
import {BooleanInput, coerceBooleanProperty} from "@angular/cdk/coercion";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-lp-box',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  templateUrl: './lp-box.component.html',
  styleUrl: './lp-box.component.scss'
})
export class LpBoxComponent implements OnInit {
  private _noPadding = false;
  @Input() title: string;
  @Input() subTitle?: string;
  // @Input() actions: RowAction[];

  @Input() get noPadding(): boolean {
    return this._noPadding;
  }

  set noPadding(value: BooleanInput) {
    this._noPadding = coerceBooleanProperty(value);
  }

  constructor() {}

  ngOnInit(): void {
    /*if (this.contentPadding === undefined || this.contentPadding === null) {
      this.contentPadding = true;
    }*/
  }

  /*sendToParent(data: any) {
    this.callbackFn(data);
  }*/

  /*callAction(action: RowAction, data: any) {
    action.action(data);
  }*/
}

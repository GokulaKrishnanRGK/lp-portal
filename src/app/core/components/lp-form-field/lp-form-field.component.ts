import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {MatHint, MatLabel} from "@angular/material/form-field";
import {NgClass, NgIf} from "@angular/common";

@Component({
  selector: 'app-lp-form-field',
  standalone: true,
  imports: [
    MatLabel,
    MatHint,
    NgClass,
    NgIf
  ],
  templateUrl: './lp-form-field.component.html',
  styleUrl: './lp-form-field.component.scss'
})
export class LpFormFieldComponent implements OnInit {
  @Input() label: any;
  @Input() description: any;
  @Input() required = false;
  form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }
}

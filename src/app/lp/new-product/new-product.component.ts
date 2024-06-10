import {Component, OnInit} from '@angular/core';
import {BackButtonComponent} from "../../core/components/back-button/back-button.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LpBoxComponent} from "../../core/components/lp-box/lp-box.component";
import {LpFormFieldComponent} from "../../core/components/lp-form-field/lp-form-field.component";
import {MatButton} from "@angular/material/button";
import {MatOption} from "@angular/material/core";
import {MatFormField, MatLabel, MatSelect} from "@angular/material/select";
import {MatToolbar} from "@angular/material/toolbar";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {NewProduct} from "../../core/models/new.product";
import {ProductService} from "../../core/services/product.service";
import {CountType} from "../../core/constants/count.type";
import {MaterialType} from "../../core/constants/material.type";
import {ProcessType} from "../../core/constants/process.type";
import {BlendType} from "../../core/constants/blend.type";
import {SpinningTechType} from "../../core/constants/spinning.tech.type";
import {EnduseType} from "../../core/constants/enduse.type";
import {MaterialBlendType} from "../../core/constants/material.blend.type";
import {MatInput} from "@angular/material/input";
import {MatCard} from "@angular/material/card";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [
    BackButtonComponent,
    FormsModule,
    LpBoxComponent,
    LpFormFieldComponent,
    MatButton,
    MatOption,
    MatSelect,
    MatToolbar,
    ReactiveFormsModule,
    RouterLink,
    MatFormField,
    MatInput,
    MatLabel,
    MatCard,
    NgForOf
  ],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent implements OnInit {

  newProductForm: FormGroup;
  newProductConfig: NewProduct;

  //TODO: will be read from db
  countTypes: CountType[] = [CountType.C16, CountType.C18, CountType.C20, CountType.C24]
  materialTypes: MaterialType[] = [MaterialType.COTTON, MaterialType.POLYESTER]
  processTypes: ProcessType[] = [ProcessType.CARDED, ProcessType.COMBED, ProcessType.SEMICOMBED]
  blendTypes: BlendType[] = [BlendType.BLOWROOM, BlendType.DRAWFRAME]
  spinningTechTypes: SpinningTechType[] = [SpinningTechType.AIRJET, SpinningTechType.COMPACT, SpinningTechType.RINGYARN, SpinningTechType.OPENEND]
  enduseTypes: EnduseType[] = [EnduseType.KNITTING, EnduseType.INDUSTRIAL, EnduseType.WEAVING]
  materialBlendTypes: MaterialBlendType[] = [MaterialBlendType.SINGLE100, MaterialBlendType.DOUBLE65_35, MaterialBlendType.DOUBLE52_48]

  constructor(private productService: ProductService, private ar: ActivatedRoute,) {
  }

  ngOnInit() {
    this.newProductForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
      count: new FormControl(0),
      materialType: new FormControl(0),
      processType: new FormControl(0),
      blendType: new FormControl(0),
      spinningTechType: new FormControl(0),
      enduseType: new FormControl(0),
      materialBlendType: new FormControl(0),
    });
  }

  submitNewProduct(): void {
    this.newProductConfig = new NewProduct(this.newProductForm.value);
    this.productService.saveProduct(this.newProductConfig, this.ar);
  }
}

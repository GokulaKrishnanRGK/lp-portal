import { Component } from '@angular/core';
import {BackButtonComponent} from "../../core/components/back-button/back-button.component";
import {MatAnchor} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {ProductsTableComponent} from "../products-table/products-table.component";

@Component({
  selector: 'app-product-config',
  standalone: true,
  imports: [
    BackButtonComponent,
    MatAnchor,
    MatToolbar,
    RouterLink,
    ProductsTableComponent
  ],
  templateUrl: './product-config.component.html',
  styleUrl: './product-config.component.scss'
})
export class ProductConfigComponent {

}

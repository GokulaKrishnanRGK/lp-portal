import {Component, OnInit} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {LpApiService} from "../../core/services/lp-api.service";
import {DataRequest} from "../../core/models/data.request";
import {DataResponse} from "../../core/models/data.response";
import {Product} from "../../core/models/product";
import {ProductService} from "../../core/services/product.service";

@Component({
  selector: 'app-products-table',
  standalone: true,
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './products-table.component.html',
  styleUrl: './products-table.component.scss'
})
export class ProductsTableComponent implements OnInit {

  products: MatTableDataSource<Product>;
  columnDefs = ['_name', '_count', '_materialType', '_processType', '_blendType', '_spinningTechType', '_enduseType', '_materialBlendType'];

  constructor(private apiService: LpApiService, private productService: ProductService) {
  }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const dr = new DataRequest('/product');
    this.apiService.read(dr).subscribe((d: DataResponse) => {
      const products = d.body as Product[];
      this.products = new MatTableDataSource<Product>(products);
    });
  }

}

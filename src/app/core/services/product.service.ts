import {Injectable} from '@angular/core';
import {LpApiService} from "./lp-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DataRequest} from "../models/data.request";
import {DataResponse} from "../models/data.response";
import {NewProduct} from "../models/new.product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: LpApiService, private router: Router) {
  }

  saveProduct(product: NewProduct, activatedRoute: ActivatedRoute) {
    const dr = new DataRequest('/product').addBody(product).hasLoader();
    this.apiService.write(dr).subscribe(
      (d: DataResponse) => {
        const mId = d.body;
        if (d.success()) {
          this.router
          .navigate([`../product-config`], {
            relativeTo: activatedRoute,
          })
          .then(r => r);
        }
      }
    );
  }
}

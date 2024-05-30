import {Injectable} from '@angular/core';
import {LpApiService} from "./lp-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NewMachine} from "../models/new.machine";
import {DataRequest} from "../models/data.request";
import {DataResponse} from "../models/data.response";

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  constructor(private apiService: LpApiService, private router: Router) {
  }

  saveMachine(machine: NewMachine, activatedRoute: ActivatedRoute) {
    const dr = new DataRequest('/machine').addBody(machine).hasLoader();
    this.apiService.write(dr).subscribe(
      (d: DataResponse) => {
        const mId = d.body;
        if (d.success()) {
          this.router
          .navigate([`../settings`], {
            queryParams: {mixingId: mId},
            relativeTo: activatedRoute,
          })
          .then(r => r);
        }
      }
    );
  }
}

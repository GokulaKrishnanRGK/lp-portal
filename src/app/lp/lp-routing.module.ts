import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsHomeComponent} from "./settings-home/settings-home.component";
import {MachineConfigComponent} from "./machine-config/machine-config.component";
import {NewMachineComponent} from "./new-machine/new-machine.component";
import {ProductConfigComponent} from "./product-config/product-config.component";
import {NewProductComponent} from "./new-product/new-product.component";

export const routes: Routes = [{path: '', redirectTo: 'app', pathMatch: 'full'},
  {path: 'settings', component: SettingsHomeComponent},
  {path: 'machine-config', component: MachineConfigComponent},
  {path: 'product-config', component: ProductConfigComponent},
  {path: 'new-machine', component: NewMachineComponent},
  {path: 'new-product', component: NewProductComponent},
  {path: '', redirectTo: 'settings', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LpRoutingModule {
}

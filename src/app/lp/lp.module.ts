import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MachineConfigComponent} from "./machine-config/machine-config.component";
import {SettingsHomeComponent} from "./settings-home/settings-home.component";
import {LpRoutingModule} from "./lp-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MachineConfigComponent, SettingsHomeComponent, LpRoutingModule
  ],
  exports: [MachineConfigComponent, SettingsHomeComponent, LpRoutingModule]
})
export class LpModule {
}

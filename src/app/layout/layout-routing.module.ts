import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';

const lpChild = {
  path: 'app',
  data: {id: 'test'},
  loadChildren: () => import('../lp/lp.module').then(m => m.LpModule),
};

export const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  {
    path: '',
    component: MainLayoutComponent,
    children: [lpChild],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}

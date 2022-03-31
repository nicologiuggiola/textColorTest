import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteDataService, RouteData } from '../route-data.service';
import { PageThreeComponent } from './page-three.component';

const routes: Routes = [{ 
  path: '',
  component: PageThreeComponent, 
  resolve: {
    RouteData: RouteDataService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageThreeRoutingModule { }
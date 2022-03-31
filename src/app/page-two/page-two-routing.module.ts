import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RouteDataService, RouteData } from '../route-data.service';
import { PageTwoComponent } from './page-two.component';

const routes: Routes = [{ 
  path: '',
  component: PageTwoComponent, 
  resolve: {
    RouteData: RouteDataService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageTwoRoutingModule { }
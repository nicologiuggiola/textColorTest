import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';

const routes: Routes = [
  { path: "", redirectTo: "/text", pathMatch: "full" },
  { path: "text", component: PageOneComponent },
  { path: 'color', loadChildren: () => import('./page-two/page-two.module').then(m => m.PageTwoModule) },
  { path: 'print', loadChildren: () => import('./page-three/page-three.module').then(m => m.PageThreeModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

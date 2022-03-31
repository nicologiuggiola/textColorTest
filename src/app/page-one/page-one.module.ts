import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageOneComponent } from './page-one.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageOneComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [PageOneComponent]
})
export class PageOneModule { }

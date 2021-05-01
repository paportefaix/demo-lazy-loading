import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentUnRoutingModule } from './parent-un-routing.module';
import { ParentUnComponent } from './parent-un.component';


@NgModule({
  declarations: [
    ParentUnComponent
  ],
  imports: [
    CommonModule,
    ParentUnRoutingModule
  ]
})
export class ParentUnModule { }

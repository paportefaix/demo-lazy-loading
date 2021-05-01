import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentDeuxRoutingModule } from './parent-deux-routing.module';
import { ParentDeuxComponent } from './parent-deux.component';


@NgModule({
  declarations: [
    ParentDeuxComponent
  ],
  imports: [
    CommonModule,
    ParentDeuxRoutingModule
  ]
})
export class ParentDeuxModule { }

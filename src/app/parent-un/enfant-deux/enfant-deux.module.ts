import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnfantDeuxRoutingModule } from './enfant-deux-routing.module';
import { EnfantDeuxComponent } from './enfant-deux.component';


@NgModule({
  declarations: [
    EnfantDeuxComponent
  ],
  imports: [
    CommonModule,
    EnfantDeuxRoutingModule
  ]
})
export class EnfantDeuxModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnfantTroisRoutingModule } from './enfant-trois-routing.module';
import { EnfantTroisComponent } from './enfant-trois.component';


@NgModule({
  declarations: [
    EnfantTroisComponent
  ],
  imports: [
    CommonModule,
    EnfantTroisRoutingModule
  ]
})
export class EnfantTroisModule { }

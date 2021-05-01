import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnfantUnRoutingModule } from './enfant-un-routing.module';
import { EnfantUnComponent } from './enfant-un.component';


@NgModule({
  declarations: [
    EnfantUnComponent
  ],
  imports: [
    CommonModule,
    EnfantUnRoutingModule
  ]
})
export class EnfantUnModule { }

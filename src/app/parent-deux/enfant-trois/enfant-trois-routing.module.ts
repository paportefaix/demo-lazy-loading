import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnfantTroisComponent } from './enfant-trois.component';

const routes: Routes = [{ path: '', component: EnfantTroisComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnfantTroisRoutingModule { }

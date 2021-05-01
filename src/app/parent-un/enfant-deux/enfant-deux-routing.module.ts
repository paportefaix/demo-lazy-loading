import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnfantDeuxComponent } from './enfant-deux.component';

const routes: Routes = [{ path: '', component: EnfantDeuxComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnfantDeuxRoutingModule { }

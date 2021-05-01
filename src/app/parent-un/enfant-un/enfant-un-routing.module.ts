import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnfantUnComponent } from './enfant-un.component';

const routes: Routes = [{ path: '', component: EnfantUnComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnfantUnRoutingModule { }

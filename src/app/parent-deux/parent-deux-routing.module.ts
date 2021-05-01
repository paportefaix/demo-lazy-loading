import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentDeuxComponent} from './parent-deux.component';

const routes: Routes = [{
  path: '', component: ParentDeuxComponent,
  children: [
    {
      path: 'enfantTrois',
      loadChildren: () => import('./enfant-trois/enfant-trois.module').then(m => m.EnfantTroisModule)
    }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentDeuxRoutingModule {
}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ParentUnComponent} from './parent-un.component';

const routes: Routes = [{
  path: '', component: ParentUnComponent,
  children: [
    {path: 'enfantUn', loadChildren: () => import('./enfant-un/enfant-un.module').then(m => m.EnfantUnModule)},
    {path: 'enfantDeux', loadChildren: () => import('./enfant-deux/enfant-deux.module').then(m => m.EnfantDeuxModule)}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentUnRoutingModule {
}

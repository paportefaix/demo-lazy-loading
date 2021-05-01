import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomPreloadingStrategy} from "./CustomPreloadingStrategy";

const routes: Routes = [
  {path: 'parentUn', loadChildren: () => import('./parent-un/parent-un.module').then(m => m.ParentUnModule)},
  {
    path: 'parentDeux',
    data: {preload: true, delay: 3000},
    loadChildren: () => import('./parent-deux/parent-deux.module').then(m => m.ParentDeuxModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingStrategy})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

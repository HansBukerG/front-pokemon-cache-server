import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './manga/components/list/list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mangaList',
    pathMatch: 'full'
  },
  {
    path: 'mangaList',
    component: ListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

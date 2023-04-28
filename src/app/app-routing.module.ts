import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChapterListComponent } from './manga/components/chapter-list/chapter-list.component';
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
  {
    path: 'manga/chapter/List/:id',
    component: ChapterListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

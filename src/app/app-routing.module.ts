import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChapterImagesComponent} from './manga/components/chapter-images/chapter-images.component';
import { ChapterListComponent } from './manga/components/chapter-list/chapter-list.component';
import { ListComponent } from './manga/components/list/list.component';
import { UrlTesterComponent } from './url-tester/url-tester.component';

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
  {
    path: 'manga/chapter/images/:mangaId/:chapterid/:translatedLanguage',
    component: ChapterImagesComponent
  },
  {
    path: 'urlTest',
    component: UrlTesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

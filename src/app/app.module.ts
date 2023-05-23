import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './digimon/components/filter/filter.component';
import { ListComponent } from './manga/components/list/list.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { ChapterListComponent } from './manga/components/chapter-list/chapter-list.component';
import {ChapterImagesComponent} from './manga/components/chapter-images/chapter-images.component';
import { UrlTesterComponent } from './url-tester/url-tester.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    ListComponent,
    StartMenuComponent,
    ChapterListComponent,
    ChapterImagesComponent,
    UrlTesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

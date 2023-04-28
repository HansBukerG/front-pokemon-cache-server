import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetMangaDTO } from '../models/getMangaDTO';

@Injectable({
  providedIn: 'root'
})
export class DataSourceService {

  constructor(private http: HttpClient) { }

  getManga = async (): Promise<GetMangaDTO | undefined> => {
    try {
      const uri = `${environment.apiUrl}/v1/manga`
      const response = await this.http.get<GetMangaDTO>(uri).toPromise();
      return response || undefined;
    } catch (error) {
      console.log('There is an error in GET request');
      return undefined;
    }
  }
  getMangaByTitle = async (title: string): Promise<GetMangaDTO | undefined> => {
    try {
      const uri = `${environment.apiUrl}/v1/manga/${title}.toPromise()`
      const response = await this.http.get<GetMangaDTO>(uri).toPromise();
      return response || undefined;
    } catch (error) {
      console.log('There is an error in GET request');
      return undefined;
    }
  }
  getMangaChapters = async (titleId: string): Promise<object | undefined> => {
    try {
      const uri = `${environment.apiUrl}/v1/manga/chapters/${titleId}.toPromise()`
      const response = await this.http.get<object>(uri);
      return response || undefined;
    } catch (error) {
      console.log('There is an error in GET request');
      return undefined;
    }
  }
  getChapterImages = async (chapterId: string): Promise<object | undefined> => {
    try {
      const uri = `${environment.apiUrl}/v1/chapter/images/${chapterId}`
      const response = await this.http.get<object>(uri).toPromise();
      return response || undefined;
    } catch (error) {
      console.log('There is an error in GET request');
      return undefined;
    }
  }
}

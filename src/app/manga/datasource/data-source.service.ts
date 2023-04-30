import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ChapterImages } from '../models/ChapterImagesDTO';
import { ChapterDTO } from '../models/getChapterDTO';
import { MangaById } from '../models/getMangaByIdDTO';
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
      console.error('There is an error in GET request');
      return undefined;
    }
  }
  getMangaByTitle = async (title: string): Promise<GetMangaDTO | undefined> => {
    try {
      const uri = `${environment.apiUrl}/v1/manga/${title}`
      const response = await this.http.get<GetMangaDTO>(uri).toPromise();
      return response || undefined;
    } catch (error) {
      console.error('There is an error in GET request');
      return undefined;
    }
  }
  getMangaById = async (titleId: string): Promise<MangaById | undefined> => {
    try {
      const uri = `${environment.apiUrl}/v1/manga/id/${titleId}`
      const response = await this.http.get<MangaById>(uri).toPromise();
      return response || undefined;
    } catch (error) {
      console.error('There is an error in GET request');
      return undefined;
    }
  }
  getMangaChapters = async (titleId: string): Promise<ChapterDTO | undefined> => {
    try {
      const uri = `${environment.apiUrl}/v1/manga/chapters/${titleId}`
      const response = await this.http.get<ChapterDTO>(uri).toPromise();
      return response || undefined;
    } catch (error) {
      console.error('There is an error in GET request');
      return undefined;
    }
  }
  getChapterImages = async (chapterId: string): Promise<ChapterImages | undefined> => {
    try {
      const uri = `${environment.apiUrl}/v1/chapter/images/${chapterId}`
      const response = await this.http.get<ChapterImages>(uri).toPromise();
      return response || undefined;
    } catch (error) {
      console.error('There is an error in GET request');
      return undefined;
    }
  }
}

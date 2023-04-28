import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DigimonDTO } from '../inDTO/digiApi.get';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  async getAllDigimon(): Promise<DigimonDTO | undefined> {
    try {
      const digimonResponse = await this.http.get<DigimonDTO>(`${environment.apiUrl}/digiApi/get/`).toPromise();
      return digimonResponse || undefined;
    } catch (error) {
      console.log('There is an error in GET request');
      return undefined;
    }
  }

  async getDigimonbyName(name:string): Promise<DigimonDTO | undefined> {
    try {
      const digimonResponse = await this.http.get<DigimonDTO>(`${environment.apiUrl}/digiApi/get/${name}`).toPromise();
      return digimonResponse || undefined;
    } catch (error) {
      console.log('There is an error in GET request');
      return undefined;
    }
  }


};

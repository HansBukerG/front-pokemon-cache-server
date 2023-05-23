import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCheckerService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  sendRequest = async (url:string): Promise<any | undefined> => {
    try {
      const response = await this.httpClient.get<any>(url).toPromise();
      return response || undefined;
    } catch (error) {
      console.error('There is an error in GET request');
      return undefined;
    }
  }
}

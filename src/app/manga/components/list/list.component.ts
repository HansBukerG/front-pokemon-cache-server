import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../../datasource/data-source.service';
import { Manga } from '../../models/Manga';
import { setMangaCoverArt } from '../../utils/utils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public mangaList: Manga[] = [];

  constructor(
    private apiService: DataSourceService
  ) { }

  ngOnInit(): void {
    (async () => {
      try {
        this.mangaList = await this.getMangaList();
      } catch (error) {
        console.error('Error fetching manga list', error);
      }
    })();
  }

  async getMangaList(): Promise<Manga[]> {
    try {
      const response = await this.apiService.getManga();
      if (response) {
        return setMangaCoverArt(response.data);
      } else {
        throw new Error('Response is undefined');
      }
    } catch (error) {
      console.error('There is an error with getManga request!', error);
      throw error;
    }
  }
}

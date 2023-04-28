import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  public formSearch!: FormGroup;

  constructor(
    private apiService: DataSourceService,
    private readonly formBuilder: FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    (async () => {
      try {
        this.formSearch = this.FormInit();
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

  async searchValues(): Promise<void> {
    try {
      if (!this.formSearch.valid) this.mangaList = await this.getMangaList();
      const response = await this.apiService.getMangaByTitle(this.formSearch.value.search);
      if (response) {
        this.mangaList = setMangaCoverArt(response.data);
      } else {
        throw new Error('Response is undefined');
      }
    } catch (error) {
      console.error('There is an error with getManga request!', error);
      throw error;
    }
  }

  goToChapters(mangaId: string): void {
    this.router.navigate(['manga/chapter/List/', mangaId]);
  }

  FormInit = () => {
    return this.formBuilder.group(
      {
        search: new FormControl('', Validators.required),
      }
    )
  }
}

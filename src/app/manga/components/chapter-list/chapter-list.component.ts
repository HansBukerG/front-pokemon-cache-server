import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSourceService } from '../../datasource/data-source.service';
import { Chapter } from '../../models/Chapter';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit{
  public chapterList:Chapter[] = [];

  constructor(
    private apiService: DataSourceService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    (async()=>{
      try {
        console.log(this.activatedRoute.snapshot.params['id']);
        const response = await this.apiService.getMangaChapters(this.activatedRoute.snapshot.params['id']);
        if (response) {
          this.chapterList = response.data;
        }
        console.log(this.chapterList);
      } catch (error) {
        console.error('Error fetching chapter list', error);
      }
    })();
  }

}

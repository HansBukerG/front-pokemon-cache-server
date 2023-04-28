import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../../datasource/data-source.service';
import { Chapter } from '../../models/Chapter';
import { sortChapters } from '../../utils/utils';

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
    private router:Router,
  ) { }

  ngOnInit(): void {
    (async()=>{
      try {
        console.log(this.activatedRoute.snapshot.params['id']);
        const response = await this.apiService.getMangaChapters(this.activatedRoute.snapshot.params['id']);
        if (response) {
          this.chapterList = sortChapters(response.data);
        }
        console.log(this.chapterList);
      } catch (error) {
        console.error('Error fetching chapter list', error);
      }
    })();
  }

  goToChapterView(chapterId:string):void{
    this.router.navigate(['manga/chapter/images/', chapterId]);
  }
}

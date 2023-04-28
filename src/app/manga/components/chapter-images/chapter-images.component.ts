import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataSourceService } from '../../datasource/data-source.service';

@Component({
  selector: 'app-chapter-images',
  templateUrl: './chapter-images.component.html',
  styleUrls: ['./chapter-images.component.css']
})
export class ChapterImagesComponent implements OnInit {
  public chapterView:string[] = [];

  constructor(
    private dataService: DataSourceService,
    private activatedRoute: ActivatedRoute
  ){}
  ngOnInit(): void {
    (async () =>{
      const response = await this.dataService.getChapterImages(this.activatedRoute.snapshot.params['id'])
      if (response) {
        this.chapterView = response.images;
      }
    }
    )()
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../../datasource/data-source.service';
import { Chapter, TranslatedLanguage } from '../../models/Chapter';
import { Manga, Tag } from '../../models/Manga';
import { getTags, setMangaCoverArtById, sortChapters } from '../../utils/utils';

@Component({
  selector: 'app-chapter-list',
  templateUrl: './chapter-list.component.html',
  styleUrls: ['./chapter-list.component.css']
})
export class ChapterListComponent implements OnInit{
  public chapterList:Chapter[] = [];
  public mangaId:string = '';
  public manga:Manga | null = null;
  public tags:Tag[] | null = null;

  constructor(
    private apiService: DataSourceService,
    private activatedRoute: ActivatedRoute,
    private router:Router,
  ) { }

  ngOnInit(): void {
    (async()=>{
      try {
        this.mangaId = this.activatedRoute.snapshot.params['id'];
        const [responseManga, response] = await Promise.all([this.apiService.getMangaById(this.mangaId), this.apiService.getMangaChapters(this.mangaId)]);
        if (responseManga) {
          this.manga = setMangaCoverArtById(responseManga.data);
          this.tags = getTags(this.manga);
        }
        if (response) {
          this.chapterList = sortChapters(response.data);
        }
      } catch (error) {
        console.error('Error fetching chapter list', error);
      }

    })();
  }

  goToChapterView(chapterId:string,translatedLanguage:string):void{
    this.router.navigate(['manga/chapter/images/', this.mangaId, chapterId, translatedLanguage]);
  }
}

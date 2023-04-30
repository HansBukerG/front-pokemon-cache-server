import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataSourceService } from '../../datasource/data-source.service';
import { Chapter, TranslatedLanguage } from '../../models/Chapter';
import { Manga } from '../../models/Manga';
import { sortChapters } from '../../utils/utils';

@Component({
  selector: 'app-chapter-images',
  templateUrl: './chapter-images.component.html',
  styleUrls: ['./chapter-images.component.css']
})
export class ChapterImagesComponent implements OnInit {
  public chapterList: Chapter[] = [];
  public chapterView: string[] = [];
  public mangaId: string = '';
  public currentChapterId: string = '';
  public currentLanguage: string = '';
  public currentChapter: Chapter | null = null;
  public currentManga: Manga | null = null;

  constructor(
    private dataService: DataSourceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  ngOnInit(): void {

    (async () => {
      this.mangaId = this.activatedRoute.snapshot.params['mangaId']
      this.currentChapterId = this.activatedRoute.snapshot.params['chapterid']
      this.currentLanguage = this.activatedRoute.snapshot.params['translatedLanguage']

      const [responseImages,responseChapters, responseManga] = await Promise.all([
        this.dataService.getChapterImages(this.currentChapterId),
        this.dataService.getMangaChapters(this.mangaId),
        this.dataService.getMangaById(this.mangaId)
      ]);

      if (responseImages) {
        this.chapterView = responseImages.images;
      }
      if (responseChapters) {
        this.chapterList = sortChapters(responseChapters.data);
        this.currentChapter = this.getCurrentChapter(this.chapterList, this.currentChapterId);
      }
      if (responseManga) {
        this.currentManga = responseManga.data;
      }


    }
    )()
  }

  goToChapters() {
    this.router.navigate(['manga/chapter/List/', this.mangaId]);
  }

  async goToNextChapter() {
    try {
      const nextChapter = this.getNextChapter(this.chapterList, this.currentChapterId, this.currentLanguage);
      if (nextChapter) {
        const responseImages = await this.dataService.getChapterImages(nextChapter.id);
        if (responseImages) {
          this.chapterView = responseImages.images;
          this.currentChapterId = nextChapter.id;
          this.currentChapter = this.getCurrentChapter(this.chapterList, this.currentChapterId);
        }
      }

    } catch (error) {
      console.error('There is an error on request of new Chapter', error)
    }

  }



  async goToPreviousChapter() {
    try {
      const nextChapter = this.getPreviousChapter(this.chapterList, this.currentChapterId, this.currentLanguage);
      if (nextChapter) {
        const responseImages = await this.dataService.getChapterImages(nextChapter.id);
        if (responseImages) {
          this.chapterView = responseImages.images;
        }
        this.currentChapterId = nextChapter.id;
        this.currentChapter = this.getCurrentChapter(this.chapterList, this.currentChapterId);
      } else {
        console.log('There is no chapter');

      }
    } catch (error) {
      console.error('There is an error on request of new Chapter', error)
    }

  }

  filterChaptersByLanguage(
    chapters: Chapter[],
    translatedLanguage: string
  ): Chapter[] {
    return sortChapters( chapters.filter(
      (chapter) => chapter.attributes.translatedLanguage === translatedLanguage
    ));
  }

  getCurrentChapter(chapters: Chapter[], currentChapterId: string): Chapter | null {
    return chapters.find((chapter) => chapter.id === currentChapterId) || null;
  }


  getNextChapter(chapters: Chapter[], currentChapterId: string, translatedLanguage: string): Chapter | null {
    const filteredChapters = this.filterChaptersByLanguage(chapters, translatedLanguage);

    const currentIndex = filteredChapters.findIndex(
      (chapter) => chapter.id === currentChapterId
    );

    if (currentIndex === -1 || currentIndex === 0) {
      return null;
    }
    return filteredChapters[currentIndex - 1];
  }

  getPreviousChapter(chapters: Chapter[], currentChapterId: string, translatedLanguage: string): Chapter | null {
    const filteredChapters = this.filterChaptersByLanguage(chapters, translatedLanguage);

    const currentIndex = filteredChapters.findIndex(
      (chapter) => chapter.id === currentChapterId
    );

    if (currentIndex === -1 || currentIndex === filteredChapters.length - 1) {

      return null;
    }

    return filteredChapters[currentIndex + 1];
  }






}

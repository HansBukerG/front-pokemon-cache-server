import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ChapterImagesComponent} from './chapter-images.component';

describe('ChapterImagesComponent', () => {
  let component: ChapterImagesComponent;
  let fixture: ComponentFixture<ChapterImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChapterImagesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChapterImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

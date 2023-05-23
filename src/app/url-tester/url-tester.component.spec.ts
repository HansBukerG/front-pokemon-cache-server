import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlTesterComponent } from './url-tester.component';

describe('UrlTesterComponent', () => {
  let component: UrlTesterComponent;
  let fixture: ComponentFixture<UrlTesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlTesterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

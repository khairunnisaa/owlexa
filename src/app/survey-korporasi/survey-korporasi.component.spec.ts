import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyKorporasiComponent } from './survey-korporasi.component';

describe('SurveyKorporasiComponent', () => {
  let component: SurveyKorporasiComponent;
  let fixture: ComponentFixture<SurveyKorporasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyKorporasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyKorporasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

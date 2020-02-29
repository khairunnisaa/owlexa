import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyProviderComponent } from './survey-provider.component';

describe('SurveyProviderComponent', () => {
  let component: SurveyProviderComponent;
  let fixture: ComponentFixture<SurveyProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

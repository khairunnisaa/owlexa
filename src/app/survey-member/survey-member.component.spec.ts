import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyMemberComponent } from './survey-member.component';

describe('SurveyMemberComponent', () => {
  let component: SurveyMemberComponent;
  let fixture: ComponentFixture<SurveyMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SurveyMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

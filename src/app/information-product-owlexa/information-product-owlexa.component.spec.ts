import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationProductOwlexaComponent } from './information-product-owlexa.component';

describe('InformationProductOwlexaComponent', () => {
  let component: InformationProductOwlexaComponent;
  let fixture: ComponentFixture<InformationProductOwlexaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformationProductOwlexaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationProductOwlexaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

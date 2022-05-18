import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SosialJaringanComponent } from './sosial-jaringan.component';

describe('SosialJaringanComponent', () => {
  let component: SosialJaringanComponent;
  let fixture: ComponentFixture<SosialJaringanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SosialJaringanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SosialJaringanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

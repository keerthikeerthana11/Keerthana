import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeletedproComponent } from './seletedpro.component';

describe('SeletedproComponent', () => {
  let component: SeletedproComponent;
  let fixture: ComponentFixture<SeletedproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeletedproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeletedproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

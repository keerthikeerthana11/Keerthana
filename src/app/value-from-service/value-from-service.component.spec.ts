import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueFromServiceComponent } from './value-from-service.component';

describe('ValueFromServiceComponent', () => {
  let component: ValueFromServiceComponent;
  let fixture: ComponentFixture<ValueFromServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueFromServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueFromServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailablebusesComponent } from './availablebuses.component';

describe('AvailablebusesComponent', () => {
  let component: AvailablebusesComponent;
  let fixture: ComponentFixture<AvailablebusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailablebusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailablebusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

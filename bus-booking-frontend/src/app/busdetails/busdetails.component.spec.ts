import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusdetailsComponent } from './busdetails.component';

describe('BusdetailsComponent', () => {
  let component: BusdetailsComponent;
  let fixture: ComponentFixture<BusdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

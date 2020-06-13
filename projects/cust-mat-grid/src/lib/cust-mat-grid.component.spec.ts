import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustMatGridComponent } from './cust-mat-grid.component';

describe('CustMatGridComponent', () => {
  let component: CustMatGridComponent;
  let fixture: ComponentFixture<CustMatGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustMatGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustMatGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

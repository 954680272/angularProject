import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalstoredetailComponent } from './localstoredetail.component';

describe('LocalstoredetailComponent', () => {
  let component: LocalstoredetailComponent;
  let fixture: ComponentFixture<LocalstoredetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalstoredetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalstoredetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

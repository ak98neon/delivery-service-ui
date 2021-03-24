import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOrderBlockComponent } from './main-order-block.component';

describe('MainOrderBlockComponent', () => {
  let component: MainOrderBlockComponent;
  let fixture: ComponentFixture<MainOrderBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOrderBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOrderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

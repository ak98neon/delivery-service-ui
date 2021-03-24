import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderList.ComponentComponent } from './order-list.component.component';

describe('OrderList.ComponentComponent', () => {
  let component: OrderList.ComponentComponent;
  let fixture: ComponentFixture<OrderList.ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderList.ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderList.ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

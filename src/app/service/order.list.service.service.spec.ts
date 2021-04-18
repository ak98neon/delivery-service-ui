import { TestBed } from '@angular/core/testing';

import { Order.List.ServiceService } from './order.list.service.service';

describe('Order.List.ServiceService', () => {
  let service: Order.List.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Order.List.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { TicketsServiceService } from './tickets-service.service';

describe('TicketsServiceService', () => {
  let service: TicketsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should found item', () => {
    expect(service.findTicket(1)).toBeDefined();
  })

  it('should not found item', () => {
    expect(service.findTicket(0)).toBeUndefined();
  })

  it('should delete item', () => {
    expect(service.findTicket(1)).toBeDefined();
    service.deleteTicket(1);
    expect(service.findTicket(1)).toBeUndefined();
  })
});

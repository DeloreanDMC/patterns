import { TestBed } from '@angular/core/testing';

import { BuyingTicketsServiceService } from './buying-tickets-service.service';
import { CardPaymentService } from './card-payment.service';
import { PaypalPaymentService } from './paypal-payment.service';
import { TicketsServiceService } from './tickets-service.service';

describe('BuyingTicketsServiceService', () => {
  it('should inject CardPayment', () => {
    const service = new BuyingTicketsServiceService(
      new CardPaymentService(),
      new TicketsServiceService()
    );
    expect(service).toBeTruthy();
  });

  it('should inject PayPalPayment', () => {
    const service = new BuyingTicketsServiceService(
      new PaypalPaymentService(),
      new TicketsServiceService()
    );
    expect(service).toBeTruthy();
  });

  it('should work PayPalPayment', () => {
    const service = new BuyingTicketsServiceService(
      new PaypalPaymentService(),
      new TicketsServiceService()
    );
    try {
      service.buyTicket(1);
      expect().nothing();
    } catch {
      fail("PayPalPayment doesn't work");
    }
  });

  it('should work PayPalPayment', () => {
    const service = new BuyingTicketsServiceService(
      new CardPaymentService(),
      new TicketsServiceService()
    );
    try {
      service.buyTicket(1);
      expect().nothing();
    } catch {
      fail("PayPalPayment doesn't work");
    }
  });

  it('should by ticket', () => {
    const mockPayment = new CardPaymentService();
    const mockTicketsService = new TicketsServiceService();
    const service = new BuyingTicketsServiceService(
      mockPayment,
      mockTicketsService
    );
    const mockId = 1;
    expect(mockTicketsService.findTicket(mockId)).toBeDefined();

    service.buyTicket(mockId);

    expect(mockTicketsService.findTicket(mockId)).toBeUndefined();
  });
});

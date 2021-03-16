import { Inject, Injectable } from '@angular/core';
import { TicketsServiceService } from './tickets-service.service';
import { Payment } from './types';

@Injectable({
  providedIn: 'root',
})
export class BuyingTicketsServiceService {
  constructor(
    @Inject('Payment') private payment: Payment,
    private ticketService: TicketsServiceService
  ) {}

  buyTicket(ticketId) {
    const foundTicket = this.ticketService.findTicket(ticketId);
    if (foundTicket) {
      const result = this.payment.pay(foundTicket.amount);
      if (result) {
        this.ticketService.deleteTicket(ticketId);
        console.log(result);
      }
    } else {
      console.log("CAN'T BUY!!");
    }
  }
}

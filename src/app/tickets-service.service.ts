import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsServiceService {
  private tickets = [{id: 1, describtion: 'DME => MSK', amount: 300} , {id: 2, describtion: 'MSK => USA', amount: 420}]
  constructor() { }

  findTicket(ticketId: number) {
    return this.tickets.find((ticket) => ticket.id === ticketId)
  }

  deleteTicket(ticketId: number) {
    const index = this.tickets.findIndex((ticket) => ticket.id === ticketId);
    this.tickets.splice(index, 1);
  }
}

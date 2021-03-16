import { Component, Inject, OnInit } from '@angular/core';
import { BuyingTicketsServiceService } from './buying-tickets-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject('BuyingTicketsPaypalPay') private buyingTicketsPaypalPay,
    @Inject('BuyingTicketsCard') private buyingTicketsCard
  ) {}

  ngOnInit(): void {
    this.buyingTicketsPaypalPay.buyTicket(1);
    this.buyingTicketsCard.buyTicket(2);
  }
}

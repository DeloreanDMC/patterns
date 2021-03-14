import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BuyingTicketsServiceService } from './buying-tickets-service.service';
import { CardPaymentService } from './card-payment.service';
import { PaypalPaymentService } from './paypal-payment.service';
import { TicketsServiceService } from './tickets-service.service';

const ticketsServiceService = new TicketsServiceService()

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ 
    PaypalPaymentService, 
    CardPaymentService, 
    TicketsServiceService,
    {
      provide: 'BuyingTicketsPaypalPay',
        useFactory: () => {
          return new BuyingTicketsServiceService(new PaypalPaymentService(), ticketsServiceService);
        }
    }, 
    {
      provide: 'BuyingTicketsCard',
        useFactory: () => {
          return new BuyingTicketsServiceService(new CardPaymentService(), ticketsServiceService);
      }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

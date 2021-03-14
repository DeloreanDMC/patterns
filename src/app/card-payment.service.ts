import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardPaymentService {
  pay(amount: number) {
    return 'Paid by card. Amount='+ amount
  }
}

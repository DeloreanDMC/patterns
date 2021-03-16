import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaypalPaymentService {
  pay(amount: number) {
    return 'Paid via PayPal. Amount=' + amount;
  }
}

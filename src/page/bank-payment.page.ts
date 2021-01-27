import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private paymentMenu: ElementFinder;

  constructor() {
    this.paymentMenu = $('#cart_navigation > button > span');
  }

  public async goToFinishedPayment() : Promise<void> {
    return this.paymentMenu.click();
  }
}

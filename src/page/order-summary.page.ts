import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private paymentStep: ElementFinder;

  constructor() {
    this.paymentStep = $('#form > p > button > span');
  }

  public async goToPaymentStep() : Promise<void> {
    return this.paymentStep.click();
  }
}

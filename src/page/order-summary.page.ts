import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class OrderSummaryPage {
  private paymentStep: ElementFinder;

  constructor() {
    this.paymentStep = $('#form > p > button > span');
  }

  public async goToPaymentStep() : Promise<void> {
    await this.paymentStep.click();
  }

  public async waitGoToPaymentStep() : Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.paymentStep), 4000);
  }
}

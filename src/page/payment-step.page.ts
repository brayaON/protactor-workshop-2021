import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class PaymentStepPage {
  private paymentStep: ElementFinder;

  constructor() {
    this.paymentStep = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }

  public async goToBankPaymentStep() : Promise<void> {
    return this.paymentStep.click();
  }

  public async waitGoToBankPaymentStep() : Promise<void> {
    return await browser.wait(ExpectedConditions.elementToBeClickable(this.paymentStep), 4000);
  }
}

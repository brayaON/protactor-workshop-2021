import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class BankPaymentPage {
  private paymentMenu: ElementFinder;

  constructor() {
    this.paymentMenu = $('#cart_navigation > button > span');
  }

  public async goToFinishedPayment() : Promise<void> {
    return this.paymentMenu.click();
  }

  public async waitGoToFinishedPayment() : Promise<void> {
    return await browser.wait(ExpectedConditions.elementToBeClickable(this.paymentMenu), 4000);
  }
}

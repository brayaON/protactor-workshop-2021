import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class AddressStepPage {
  private shippingStep: ElementFinder;

  constructor() {
    this.shippingStep = $('#center_column > form > p > button > span');
  }

  public async goToShippingStep() : Promise<void> {
    await this.shippingStep.click();
  }

  public async waitGoToShippingStep() : Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.shippingStep), 5000);
  }
}

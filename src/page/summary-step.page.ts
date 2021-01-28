import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class SummaryStepPage {
  private signInStep: ElementFinder;

  constructor() {
    this.signInStep = $('.cart_navigation span');
  }

  public async goToSignInStep() : Promise<void> {
    await this.signInStep.click();
  }

  public async waitGoToSignInStep() : Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.signInStep), 10000);
  }
}

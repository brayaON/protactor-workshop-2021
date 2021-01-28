import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private summaryStep: ElementFinder;

  constructor() {
    this.summaryStep = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryStep() : Promise<void> {
    await this.summaryStep.click();
  }

  public async waitGoToSummaryStep() : Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.summaryStep), 4000);
  }
}

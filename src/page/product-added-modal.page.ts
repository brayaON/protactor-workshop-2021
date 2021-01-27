import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private summaryStep: ElementFinder;

  constructor() {
    this.summaryStep = $('[style*="display: block;"] .button-container > a');
  }

  public async goToSummaryStep() : Promise<void> {
    return this.summaryStep.click();
  }
}

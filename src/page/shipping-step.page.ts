import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private summaryMenu: ElementFinder;

  constructor() {
    this.summaryMenu = $('#cgv');
  }

  public async goToSummaryMenu() : Promise<void> {
    return this.summaryMenu.click();
  }
}

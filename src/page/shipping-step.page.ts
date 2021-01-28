import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class ShippingStepPage {
  private summaryMenu: ElementFinder;

  constructor() {
    this.summaryMenu = $('#cgv');
  }

  public async goToSummaryMenu() : Promise<void> {
    await this.summaryMenu.click();
  }

  public async waitGoToSummaryMenu() : Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.summaryMenu), 4000);
  }
}

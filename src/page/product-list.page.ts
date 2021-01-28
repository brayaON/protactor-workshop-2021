import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private productAdded: ElementFinder;

  constructor() {
    this.productAdded = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToProductAddedModal() : Promise<void> {
    await this.productAdded.click();
  }

  public async waitGoToProductAddedModal() : Promise<void> {
    return await browser.wait(ExpectedConditions.elementToBeClickable(this.productAdded), 4000);
  }
}

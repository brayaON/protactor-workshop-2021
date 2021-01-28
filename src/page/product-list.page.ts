import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class ProductListPage {
  private productAdded: ElementFinder;
  // private products;

  constructor() {
    this.productAdded = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
    // this.products = $('#block_top_menu li');
  }

  public async goToProductAddedModal() : Promise<void> {
    await this.productAdded.click();
  }

  public async waitGoToProductAddedModal() : Promise<void> {
    return await browser.wait(ExpectedConditions.elementToBeClickable(this.productAdded), 4000);
  }

  /*
  private findByProduct(productName) {
    $$('#block_top_menu li').filter(async (elem) => {
      return elem.getText().then((text) => {
        return text === productName;
      });
    }).first().click();
  }
  */
}

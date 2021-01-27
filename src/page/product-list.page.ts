import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private productAdded: ElementFinder;

  constructor() {
    this.productAdded = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToProductAddedModal() : Promise<void> {
    return this.productAdded.click();
  }
}

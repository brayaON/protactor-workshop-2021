import { $, browser } from 'protractor';
import { MenuContentPage, ProductAddedModalPage, SummaryStepPage,
  SignInStepPage, AddressStepPage, ShippingStepPage, OrderSummaryPage, ProductListPage,
  PaymentStepPage, BankPaymentPage } from '../src/page/';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const addressPage: AddressStepPage = new AddressStepPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const productListPage: ProductListPage = new ProductListPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('thin should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(1000));

    menuContentPage.goToTShirtMenu();
    await(browser.sleep(1000));

    productListPage.goToProductAddedModal();
    await(browser.sleep(5000));

    productAddedModalPage.goToSummaryStep();
    await(browser.sleep(5000));

    summaryStepPage.goToSignInStep();
    await(browser.sleep(5000));

    await $('#email').sendKeys('aperdomobo@gmail.com');
    await $('#passwd').sendKeys('WorkshopProtractor');
    signInStepPage.goToAddressMenu();
    await(browser.sleep(5000));

    addressPage.goToShippingStep();
    await(browser.sleep(5000));

    shippingStepPage.goToSummaryMenu();
    await(browser.sleep(5000));

    orderSummaryPage.goToPaymentStep();
    await(browser.sleep(5000));

    paymentStepPage.goToBankPaymentStep();
    await(browser.sleep(5000));

    bankPaymentPage.goToFinishedPayment();
    await(browser.sleep(1000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });

});

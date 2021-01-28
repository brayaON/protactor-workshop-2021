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

  it('thin should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();

    await productListPage.waitGoToProductAddedModal();
    await productListPage.goToProductAddedModal();

    await productAddedModalPage.waitGoToSummaryStep();
    await productAddedModalPage.goToSummaryStep();

    await summaryStepPage.goToSignInStep();

    await signInStepPage.fillEmail();
    await signInStepPage.fillPass();
    await signInStepPage.goToAddressMenu();

    await addressPage.goToShippingStep();

    await shippingStepPage.goToSummaryMenu();

    await orderSummaryPage.goToPaymentStep();

    await paymentStepPage.goToBankPaymentStep();
    await bankPaymentPage.goToFinishedPayment();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });

});

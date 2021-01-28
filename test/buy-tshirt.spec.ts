import { $, browser } from 'protractor';
import { MenuContentPage, ProductAddedModalPage, SummaryStepPage,
  SignInStepPage, AddressStepPage, ShippingStepPage, OrderSummaryPage, ProductListPage,
  PaymentStepPage, BankPaymentPage } from '../src/page/';

describe('Open a page on the web browser', () => {
  browser.get('http://automationpractice.com/');
});

describe('T-shirt purchase process', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const productListPage: ProductListPage = new ProductListPage();

  it('T-shirt added to the car', async () => {
    await menuContentPage.goToTShirtMenu();
    await productListPage.waitGoToProductAddedModal();
    await productListPage.goToProductAddedModal();

    await productAddedModalPage.waitGoToSummaryStep();
    await productAddedModalPage.goToSummaryStep();

    await summaryStepPage.goToSignInStep();
  });

});

describe('Login to the app', () => {
  const signInStepPage: SignInStepPage = new SignInStepPage();

  it('Inside the app', async () => {
    await signInStepPage.fillEmail();
    await signInStepPage.fillPass();
    await signInStepPage.goToAddressMenu();
  });
});

describe('Select the direction by the default', () => {
  const addressPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();

  it('Direction selected', async() => {
    await addressPage.goToShippingStep();
    await shippingStepPage.goToSummaryMenu();
  });
});

describe('Payment process', () => {
  const orderSummaryPage: OrderSummaryPage = new OrderSummaryPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentPage: BankPaymentPage = new BankPaymentPage();

  it('Purchased t-shirt', async () => {

    await orderSummaryPage.goToPaymentStep();
    await paymentStepPage.goToBankPaymentStep();
    await bankPaymentPage.goToFinishedPayment();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });

});

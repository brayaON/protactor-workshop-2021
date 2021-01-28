import { $, browser, ElementFinder, ExpectedConditions } from 'protractor';

export class SignInStepPage {
  private addressMenu: ElementFinder;
  private emailData: ElementFinder;
  private passData: ElementFinder;

  constructor() {
    this.addressMenu = $('#SubmitLogin > span');
    this.emailData = $('#email');
    this.passData = $('#passwd');
  }

  public async goToAddressMenu(): Promise<void> {
    await this.addressMenu.click();
  }

  public async waitGoToAddressMenu(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.addressMenu), 4000);
  }

  public async fillEmail() : Promise<void> {
    await this.emailData.sendKeys('aperdomobo@gmail.com');
  }

  public async fillPass() : Promise<void> {
    await this.passData.sendKeys('WorkshopProtractor');
  }
}

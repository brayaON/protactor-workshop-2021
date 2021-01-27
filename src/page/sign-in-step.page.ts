import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private addressMenu: ElementFinder;
  private emailData: ElementFinder;
  private passData: ElementFinder;

  constructor() {
    this.addressMenu = $('#SubmitLogin > span');
  }

  public async goToAddressMenu(): Promise<void> {
    this.addressMenu.click();
  }

  public async fillEmail() : Promise<void> {
    await this.emailData.sendKeys('aperdomobo@gmail.com');
  }

  public async fillPass() : Promise<void> {
    await this.passData.sendKeys('WorkshopProtractor');
  }
}

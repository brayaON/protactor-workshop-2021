import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private signInStep: ElementFinder;

  constructor() {
    this.signInStep = $('.cart_navigation span');
  }

  public async goToSignInStep() : Promise<void> {
    return this.signInStep.click();
  }
}

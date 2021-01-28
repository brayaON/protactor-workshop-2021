import { $, ElementFinder, by } from 'protractor';

export class PersonalInformationPage {
  private firstName: ElementFinder;
  private lastName: ElementFinder;
  private sex: ElementFinder;
  private experience: ElementFinder;
  private profession: ElementFinder;
  private tools: ElementFinder;
  private continent: ElementFinder;
  // private commands: ElementFinder;

  private send: ElementFinder;
  constructor() {
    this.firstName = $('form > table > tbody > tr:nth-child(1) > td:nth-child(2) input');
    this.lastName = $('form > table > tbody > tr:nth-child(2) > td:nth-child(2) input');
    this.sex = $('form > table > tbody > tr:nth-child(3) > td:nth-child(2)');
    this.experience = $('form > table > tbody > tr:nth-child(4) > td:nth-child(2)');
    this.profession = $('form > table > tbody > tr:nth-child(6) > td:nth-child(2)');
    this.tools = $('form > table > tbody > tr:nth-child(8) > td:nth-child(2)');
    this.send = $('form > table > tbody > tr:nth-child(11) > td:nth-child(2) button');
    this.continent = $('form > table > tbody > tr:nth-child(9) > td:nth-child(2) select');
  }

  public async fillForm(data: {}) {
    await this.firstName.sendKeys(data['firstName']);
    await this.lastName.sendKeys(data['lastName']);
    await this.sex.all(by.tagName('input')).filter((elem) => {
      return elem.getAttribute('value').then((value) => {
        return value === data['sex'];
      });
    }).get(0).click();

    await this.experience.all(by.css('span > input')).filter((elem) => {
      return elem.getAttribute('value').then((value) => {
        return value === data['experience'];
      });
    }).get(0).click();

    await this.profession.all(by.css('span > input')).filter((elem) => {
      return elem.getAttribute('value').then((value) => {
        return value === data['profession'][0];
      });
    }).get(0).click();

    await this.tools.all(by.css('span > input')).filter((elem) => {
      return elem.getAttribute('value').then((value) => {
        return value === data['tools'][0];
      });
    }).get(0).click();

    await this.continent.$$('option').filter(async (elem) => {
      return elem.getText().then((value) => {
        return value === data['continent'];
      });
    }).click();
    await this.send.click();
  }
}

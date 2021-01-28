import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page/personal-information.page';

describe('Open the browser', () => {

  const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

  it('then should have a title', async () => {
    await browser.get('https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm');
    await personalInformationPage.fillForm({
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: '7',
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    });
    await expect(browser.getTitle()).toEqual('Practice Automation Form');
  });
});

import { browser } from 'protractor';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    beforeEach(() => {
      browser.get('https://www.google.com');
    });
    it('then should have a title', () => {
      expect(browser.getTitle()).toEqual('Google')
    });
  });
});

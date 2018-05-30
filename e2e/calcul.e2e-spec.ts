import { browser, by, element } from 'protractor';

describe('Calculate', () => {

  beforeEach(() => {

    browser.get('/');

  });

  it('should have a textarea and calculate button', () => {

    expect(element(by.css('app-root app-calcul form textarea')).isPresent()).toEqual(true);

    expect(element(by.css('app-root app-calcul form button')).isPresent()).toEqual(true);

  });

  it('should allow calculating', () => {

    const calculateButton = element(by.css('button'));

    const calculateBox = element(by.css('textarea'));

    calculateBox.sendKeys('Lorem Ipsum has been the industry standard dummy text ever since the 1500s, it to make a type specimen book.');

    calculateButton.click().then(() => {

      const result = element.all(by.css('app-calcul span'));

      expect(result.getText()).toEqual(['2']);

    });

  });

});

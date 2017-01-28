import { BitcoinconverterAngular2TestPage } from './app.po';

describe('bitcoinconverter-angular2-test App', function() {
  let page: BitcoinconverterAngular2TestPage;

  beforeEach(() => {
    page = new BitcoinconverterAngular2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

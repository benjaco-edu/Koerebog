import { MandatoryPage } from './app.po';

describe('mandatory App', function() {
  let page: MandatoryPage;

  beforeEach(() => {
    page = new MandatoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

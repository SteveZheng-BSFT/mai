import { MaiPage } from './app.po';

describe('mai App', function() {
  let page: MaiPage;

  beforeEach(() => {
    page = new MaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

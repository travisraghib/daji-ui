import { DajiUiPage } from './app.po';

describe('daji-ui App', () => {
  let page: DajiUiPage;

  beforeEach(() => {
    page = new DajiUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

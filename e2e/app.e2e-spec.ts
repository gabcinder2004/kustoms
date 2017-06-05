import { KustomsPage } from './app.po';

describe('kustoms App', function() {
  let page: KustomsPage;

  beforeEach(() => {
    page = new KustomsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { PsjwtPage } from './app.po';

describe('psjwt App', function() {
  let page: PsjwtPage;

  beforeEach(() => {
    page = new PsjwtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('psjwt works!');
  });
});

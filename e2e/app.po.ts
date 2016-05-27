export class PsjwtPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('psjwt-app h1')).getText();
  }
}

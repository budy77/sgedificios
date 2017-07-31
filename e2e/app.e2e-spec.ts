import { SgedificiosPage } from './app.po';

describe('sgedificios App', () => {
  let page: SgedificiosPage;

  beforeEach(() => {
    page = new SgedificiosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

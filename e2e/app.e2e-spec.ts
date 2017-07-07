import { BasicangularioPage } from './app.po';

describe('basicangulario App', () => {
  let page: BasicangularioPage;

  beforeEach(() => {
    page = new BasicangularioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

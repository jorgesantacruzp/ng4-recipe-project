import { Ng4RecipeProjectPage } from './app.po';

describe('ng4-recipe-project App', () => {
  let page: Ng4RecipeProjectPage;

  beforeEach(() => {
    page = new Ng4RecipeProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

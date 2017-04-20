import { NgSimpleDataBindingPage } from './app.po';

describe('ng-simple-data-binding App', () => {
  let page: NgSimpleDataBindingPage;

  beforeEach(() => {
    page = new NgSimpleDataBindingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

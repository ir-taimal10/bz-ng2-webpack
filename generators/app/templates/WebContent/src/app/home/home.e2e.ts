describe('Home', () => {

  beforeEach(() => {
    browser.get('/home');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'home';
    expect(subject).toEqual(result);
  });
});

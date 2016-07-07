describe('Amusement', () => {

  beforeEach(() => {
    browser.get('/amusement/title');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'title';
    expect(subject).toEqual(result);
  });
});

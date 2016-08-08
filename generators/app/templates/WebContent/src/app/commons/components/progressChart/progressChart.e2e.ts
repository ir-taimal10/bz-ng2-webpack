describe('ProgressChart', () => {

  beforeEach(() => {
    browser.get('/progressChart');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = 'progressChart';
    expect(subject).toEqual(result);
  });
});

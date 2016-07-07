describe('<%=props.upperCamelCaseName%>', () => {

  beforeEach(() => {
    browser.get('/<%=props.componentName%>');
  });


  it('should have a title', () => {
    let subject = browser.getTitle();
    let result  = '<%=props.componentName%>';
    expect(subject).toEqual(result);
  });
});

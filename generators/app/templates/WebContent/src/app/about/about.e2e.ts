describe('About', () => {

    beforeEach(() => {
        browser.get('/#/about');
    });


    it('should have a title', () => {
        let subject = browser.getTitle();
        let result = 'WebParts';
        expect(subject).toEqual(result);
    });
});

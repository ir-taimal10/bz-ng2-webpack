describe('Module to test: <%= name %>', function () {
   var element;
    beforeEach(module('<%= name %>Module'));
    beforeEach(module('pascalprecht.translate'));
    /***
     * Test for directive
     * */
    describe('<%= name %> directive', function () {
        var $compile,
            $rootScope;
        beforeEach(inject(function (_$compile_, _$rootScope_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $compile = _$compile_;
            $rootScope = _$rootScope_;
        }));
        it('Replaces the element with the appropriate content', function () {
            // Compile a piece of HTML containing the directive
            element = $compile('<<%= splitName %>></<%= splitName %>>')($rootScope);
            $rootScope.$digest();
            // Check that the compiled element contains the templated content
        });
    });
    /***
     * Test for controller
     * */
    describe('<%= name %> Controller', function () {
        var _<%= name %>Controller;
        beforeEach(function() {
            _<%= name %>Controller = element.controller('<%= name %>');
        });
        it('should be Defined', inject(function () {
            expect(_<%= name %>Controller).toBeDefined();
        }));
    });
    /***
     * Test for service
     * */
    describe('<%= name %> Service', function () {

    });
});

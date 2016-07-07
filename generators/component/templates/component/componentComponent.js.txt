var  <%= name %>Module = angular.module('<%= name %>Module');
var <%= upperName %>Controller = ['$i18n', function ($i18n) {
    /**
     * Tip: add here only visual logic
     */
    var self = this;
    self.showAlert = function () {
        alert($i18n.translate.general_alert);
    };
}];

<%= name %>Module.component('<%= name %>', {
    transclude: true,
    bindings: {
        title: '@'
    },
    controller: <%= upperName %>Controller,
    controllerAs: 'ctrl',
    template: require('./<%= name %>.html')
});

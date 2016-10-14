(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: false
      });
    $stateProvider
      .state('landing', {
        url: '/',
        templateUrl: '/templates/landing.html'
      })
      .state('test',{
        url: '/test',
        templateUrl: '/templates/test.html'
      });
  }
  angular
    .module('blocChat', ['firebase', 'ui.router'])
    .config(config);
})();

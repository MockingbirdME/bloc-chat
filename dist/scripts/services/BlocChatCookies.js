(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      console.log(currentUser);
      $uibModal.open({
        controller: 'UsernameModalCtrl as username',
        templateUrl: '/templates/usernameModal.html',
        size: 'sm',
        backdrop: 'static',
        keyboard: false
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();

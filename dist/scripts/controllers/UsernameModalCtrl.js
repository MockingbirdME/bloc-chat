(function() {
  function UsernameModalCtrl($cookies, $uibModalInstance, $scope) {
    this.errorCode = "";
    this.setUsername = function(){
      if ($scope.userName != undefined && $scope.userName != "") {
        $cookies.put('blocChatCurrentUser', $scope.userName);
        $uibModalInstance.close();
      } else {
        this.errorCode = "Username cannot be blank."
      }
    };
  }


  angular
    .module('blocChat')
    .controller('UsernameModalCtrl', ['$cookies', '$uibModalInstance', '$scope', UsernameModalCtrl]);
})();

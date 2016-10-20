(function() {
  function LandingCtrl($cookies, Messages, $uibModal, Rooms, $scope, $firebaseArray) {
    this.testData = $cookies.get('blocChatCurrentUser');
    this.rooms = Rooms;
    this.messages = Messages;
    this.open = function(size) {
      var modalInst = $uibModal.open({
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modal.html'
      });
    }


  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['$cookies', 'Messages', '$uibModal', 'Rooms', '$scope', '$firebaseArray', LandingCtrl]);
})();

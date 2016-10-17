(function() {
  function LandingCtrl($uibModal, Rooms, $firebaseArray) {
    this.testData = "The controller is loading";

    this.roomsList = Rooms.list();

    this.open = function(size) {
      var modalInst = $uibModal.open({
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modal.html',
        size: size
      });
    }

  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['$uibModal', 'Rooms', '$firebaseArray', LandingCtrl]);
})();

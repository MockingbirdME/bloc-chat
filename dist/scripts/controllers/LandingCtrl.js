(function() {
  function LandingCtrl(Messages, $uibModal, Rooms, $firebaseArray) {
    this.testData = "The controller is loading";
    this.rooms = Rooms;

    this.open = function(size) {
      var modalInst = $uibModal.open({
        controller: 'ModalCtrl as modal',
        templateUrl: '/templates/modal.html'
      });
    }


  }

  angular
    .module('blocChat')
    .controller('LandingCtrl', ['Messages', '$uibModal', 'Rooms', '$firebaseArray', LandingCtrl]);
})();

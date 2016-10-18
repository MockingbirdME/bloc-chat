(function() {
  function Messages($firebaseArray) {


    Messages.addMessage = function(messageTxt, roomId) {

    }

    return Messages;
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$firebaseArray', Messages]);
})();

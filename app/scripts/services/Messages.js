(function() {
  function Messages($cookies, $firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    var username = $cookies.get('blocChatCurrentUser');
    var reset = function(){
      document.getElementById("msg-input-area").value="";
    };

    Messages.send = function(messageTxt, roomId) {
      var date = new Date();
      date = date.toString();
      messages.$add({content: messageTxt, roomId: roomId, sentAt: date, username: username});
      reset();
    }

    return Messages;
  }

  angular
    .module('blocChat')
    .factory('Messages', ['$cookies', '$firebaseArray', Messages]);
})();

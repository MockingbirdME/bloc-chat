(function() {
  function Rooms($firebaseArray) {
    var ref = firebase.database().ref();
    Rooms.rooms = $firebaseArray(ref.child("rooms"));
    var msgs = $firebaseArray(ref.child("messages"));

    function getMessages(id) {
      return $firebaseArray(ref.child('messages').orderByChild("roomId").equalTo(id));
    }

    Rooms.currentRoom = {name: "no room selected", $id: "-KUHzfoJA_yO4WGGqVZf"};
    Rooms.messages = [{username: "devon", content: "something here"}, {username: "someguy", content: "something else here"}];

    Rooms.addRoom = function(roomName) {
      rooms.$add({name: roomName});
    }

    Rooms.selectRoom = function(room) {
      Rooms.currentRoom = room;
      Rooms.messages = getMessages(Rooms.currentRoom.$id);
    }




    return Rooms;
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();

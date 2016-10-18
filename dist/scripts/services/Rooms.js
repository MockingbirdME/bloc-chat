(function() {
  function Rooms($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    Rooms.currentRoom = {name: "no room selected"};

    Rooms.list = function() {
      return rooms;
    }

    Rooms.addRoom = function(roomName) {
      rooms.$add({name: roomName});
    }

    Rooms.selectRoom = function(room) {
      Rooms.currentRoom = room;
    }



    return Rooms;
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();

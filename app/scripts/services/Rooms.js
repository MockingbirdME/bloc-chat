(function() {
  function Rooms($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);

    Rooms.list = function() {
console.log(rooms[0]);
      return rooms;
    }

    Rooms.addRoom = function(roomName) {
      rooms.$add({name: roomName});
    }

    return Rooms;
  }

  angular
    .module('blocChat')
    .factory('Rooms', ['$firebaseArray', Rooms]);
})();

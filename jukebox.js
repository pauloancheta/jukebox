//For assignment --------------------------------

var parseNote = function(noteString){
  var noteObject = {};
  var noteArray = noteString.split('*');
  noteObject.pitch = noteArray[0];
  noteObject.beats = noteArray[1];
  return noteObject;
};

var parseSong = function(songString){
  var noteObjectsArray = [];
  var notes = songString.split(' ');

  for(var i=0; i < notes.length; i++){
    noteObjectsArray.push( parseNote(notes[i]) );
  }
  return noteObjectsArray;
};

// var song = prompt("give me a song");
// playSong(parseSong(song), 300);


// var askForSong = function() {
//   var song = prompt("give me a song");
//   playSong(parseSong(song), 300, askForSong);
// }

// askForSong()

// for(;;){
//   var song = prompt("give me a song")
//   playSong(parseSong(song), 300);
// }

var func = function(){
  var song = prompt("give me a song");
  var play = playSong(parseSong(song), 300, func);
  return play;
};
func();
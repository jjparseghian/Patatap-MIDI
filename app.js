midi = null;  // global MIDIAccess object

function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
  midi.inputs.forEach(function(key, port){
    key.onmidimessage = function(e){
      console.log("event", e.data);
    }
  })
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

navigator.requestMIDIAccess( { sysex: false } ).then( onMIDISuccess, onMIDIFailure );






// $(document).ready(function(){
//  midi = null;

//  function onMIDISuccess(midiAccess) {
//   console.log("MIDI ready!");
//   midi = midiAccess;
// };

// function onMIDIfailure(msg) {
//   console.log("Failed to get MIDI Access - " + msg );
// };

// function onMIDIMessage( event ) {
//   var str = "MIDI message received at timestamp " + event.timestamp + "[" + event.data.length + " bytes]: ";
//   for (var i=0; i<event.data.length; i++) {
//     str += "0x" + event.data[i].toString(16) + " ";
//   }
//   console.log( str );
// }

// function startLoggingMIDIInput( midiAccess, indexOfPort ) {
//   midiAccess.inputs.forEach( function(entry) {entry.onmidimessage = onMIDIMessage;});
// }

// navigator.requestMIDIAccess().then( onMIDISuccess, onMIDIfailure, onMIDIMessage, startLoggingMIDIInput )

// })









  // var patatapMIDIController = (function(){

  //   var connect = function(){
  //     if (window.navigator && 'function' === typeof window.navigator.requestMIDIAccess) {
  //       window.navigator.requestMIDIAccess();
  //     } else {
  //       console.log("No Web MIDI support");
  //     }
  //   }

  //   connect();

  // })();
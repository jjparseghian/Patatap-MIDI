midi = null;  // global MIDIAccess object

function onMIDISuccess( midiAccess ) {
  console.log( "MIDI ready!" );
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
}

function onMIDIFailure(msg) {
  console.log( "Failed to get MIDI access - " + msg );
}

function listInputsAndOutputs( midiAccess ) {
  for (var input in midiAccess.inputs) {
    console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
      "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
      "' version:'" + input.version + "'" );
  }

  for (var output in midiAccess.outputs) {
    console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
      "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
      "' version:'" + output.version + "'" );
  }
}

function onmidimessage(e) {
            /**
            * e.data is an array
            * e.data[0] = on (144) / off (128) / detune (224)
            * e.data[1] = midi note
            * e.data[2] = velocity || detune
            */
            console.log(e)
            switch(e.data[0]) {
                case 144:
                    Engine.noteOn(e.data[1], e.data[2]);
                break;
                case 128:
                    Engine.noteOff(e.data[1]);
                break;
                case 224:
                    Engine.detune(e.data[2]);
                break;
            }

        }

navigator.requestMIDIAccess( { sysex: false } ).then( onMIDISuccess, onMIDIFailure, listInputsAndOutputs, onmidimessage );






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
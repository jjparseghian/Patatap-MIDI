midi = null;  // global MIDIAccess object

function onMIDISuccess( midiAccess ) {
  // console.log( "MIDI ready!" );
  midi = midiAccess;  // store in the global (in real usage, would probably keep in an object instance)
  midi.inputs.forEach(function(key, port){
    key.onmidimessage = function(e){
      console.log("event data", e.data);
      midiKey = "" + e.data[0] + e.data[1]
      keydown = $.Event('keydown');
      console.log("midiKey", midiKey)
      switch (midiKey) {

          // Row 1
          case "14453":
            keydown.which = 81;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14553":
            keydown.which = 87;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14653":
            keydown.which = 69;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14753":
            keydown.which = 82;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14853":
            keydown.which = 84;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14953":
            keydown.which = 89;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "15053":
            keydown.which = 85;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "15153":
            keydown.which = 73;
            $(window).trigger(keydown);
            console.log("hello")
            break;

          // Row 2
          case "14554":
            keydown.which = 79;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14654":
            keydown.which = 80;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14754":
            keydown.which = 65;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14854":
            keydown.which = 83;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14954":
            keydown.which = 68;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "15054":
            keydown.which = 70;
            $(window).trigger(keydown);
            console.log("hello")
            break;

          // Row 3
          case "14555":
            keydown.which = 71;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14655":
            keydown.which = 72;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14755":
            keydown.which = 74;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14855":
            keydown.which = 75;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14955":
            keydown.which = 76;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "15055":
            keydown.which = 90;
            $(window).trigger(keydown);
            console.log("hello")
            break;

          // Row 4
          case "14556":
            keydown.which = 88;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14656":
            keydown.which = 67;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14756":
            keydown.which = 86;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14856":
            keydown.which = 66;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "14956":
            keydown.which = 78;
            $(window).trigger(keydown);
            console.log("hello")
            break;
          case "15056":
            keydown.which = 77;
            $(window).trigger(keydown);
            console.log("hello")
            break;

          // Scene Switcher
          case "14482":
            keydown.which = 32;
            $(window).trigger(keydown);
            break;

        }
      // keydown.keyCode = 82
      // keydown = new KeyboardEvent("keydown", {key: "Q", code: "82", charCode: 82, keyCode: 82, which: 82});
      console.log(keydown);
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
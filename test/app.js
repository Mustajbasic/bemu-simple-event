const SimpleEvent = require('bemu-simple-event');

let doorBell = SimpleEvent();

// Event is passed to another file
const Basement = require('./nested/folders/with-some-file-in-it')(doorBell);

doorBell.listen(whoIsAtTheDoor => {
    // This code lives in the living room
    console.log(whoIsAtTheDoor + ' is at the door (Living room)');
});

doorBell.listen(whoIsAtTheDoor => {
    // This code lives in the bedroom
    console.log(whoIsAtTheDoor + ' is at the door (Bedroom)');
});

//Somebody rings the doorbell
doorBell.trigger('Santa');
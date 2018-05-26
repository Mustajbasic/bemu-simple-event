# Simple event
SimpleEvent provides you an easy way to trigger multiple events at once  across your project. This package has no additional dependencies.

**To install run**

    npm i --save bemu-simple-event

**To use Simple Event in your project simply do**

     const SimpleEvent = require('bemu-simple-event');

**Example usage:**

    let doorBell = SimpleEvent();
    
    doorBell.listen(whoIsAtTheDoor => {
	    // This code lives in the living room
	    console.log(whoIsAtTheDoor + ' is at the door');
    });
    
    doorBell.listen(whoIsAtTheDoor => {
	    // This code lives in the bedroom
	    if(isEverybodySleeping()) {
		    // shh, don't wake anybody up
		    return;
		}
	    console.log(whoIsAtTheDoor + ' is at the door');
    });
    
    //Somebody rings the doorbell
    doorBell.trigger('Santa');

    

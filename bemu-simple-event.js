const SimpleEvent = () => {
    const events = [];

    /**
     * This method registers a callback function  that will be called then the corresponding event is triggered.
     * @param {any} ev Event function (param?) => {...}
     * @returns Function to unsubscribe from the event
     */
    const listen = (ev) => {

        if(typeof ev !== 'function') {
            console.error('Listener callback is not a function.');
            return;
        }
        events.push(ev);
        return unsubscribe(events.length-1);
    }

    /**
     * This method will call events from all listeners.
     * @param {any} param Optional parameter that if passed will be passed down to all listener events.
     */
    const trigger = (param) => {
        events.forEach(event => event(param));
    }

    const unsubscribe = (i) => {
        return ()=>{
            events[i] = () => {}
        }
    }

    return {
        listen: listen,
        trigger: trigger
    }
}

module.exports = SimpleEvent;
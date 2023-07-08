export class EventEmitter {

  constructor() {
    this._events = {}
  }

  on(name, listener) {
    //adds a callback to be called when an event occurs
    if (!this._events[name]) {
      this._events[name] = []
    }

    this._events[name].push(listener);
  };


  off(name, listenerToRemove) {
    //removes a callback from a given event name
    if (!this._events[name]) {
      throw new Error(`Can't remove a listener. Event "${name} doesn't exits"`)
    }

    const filterListener = (listener) => listener !== listenerToRemove;

    this._events[name] = this._events[name].filter(filterListener)

  };


  emit(name, data) {
    //calls all callbacks registered to a given event
    //takes an event name, and any payload/s to pass to its registered callbacks.
    if (!this._events[name]) {
      throw new Error(`Can't emit an event. Event "${name} doesn't exits"`)
    }

    const loadsCallback = (callback) => {
      callback(data)
    }

    this._events[name].forEach(loadsCallback)
  }

  /**
   * Bonus tasks
   **/
  once() {
    // adds a callback to be called when an event occures
    // same as `on` but happens only once!
  }
  listeners() {
    // returns ALL callbacks of a given event name
  }
  eventNames() {
    // returns ALL event names
  }
  removeAllListeners() {
    // removes all listeners of a given event name
  }
}

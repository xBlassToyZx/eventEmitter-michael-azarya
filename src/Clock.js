import { EventEmitter } from "./EventEmitter.js"
//
// Clock should inherit from EventEmitter
// you decide on class modifiers... (public/private)
export class Clock extends EventEmitter {

  constructor(interval = 1000) {
    super()
    this.interval = interval;
    // this.timer = null;
    this.counter = 0;
  }

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.counter++;
        this.emit('TICK', this.counter)
      }, this.interval);
      this.emit('STARTED', this.counter)
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
      this.emit('STOPED', this.counter);
      this.counter = 0;
    }
  }
  // tick
}

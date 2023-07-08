//
import { Clock } from "./Clock.js"
//

// let rolex = new Clock(500);

// print out the rolex count on every tick
// set the rolex to stop after 5 ticks
// print out the clock started or stopped along with its current count
//
// if you've completed the `once` bonus task
//   - make sure you respond to start and stop only once
//
// if you've completed the `eventNames` bonus task
//   - print out the event names on start and stop
//   - validate the event names for start and stop had been removed
//     (they are called only once...)
//
//
// start the rolex

const clock = new Clock(500);

clock.on('STARTED', (counter) => {
  console.log(`Clock started at count: ${counter}`);
});

clock.on('STOPED', (counter) => {
  console.log(`Clock stopped at count: ${counter}`);
});

clock.on('TICK', (counter) => {
  console.log(`Tick ${counter}`);
});

clock.start();

setTimeout(() => {
  clock.stop();
}, 5000);

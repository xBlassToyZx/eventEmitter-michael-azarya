<!-- prettier-ignore-start -->

---------------------------------------------------------------
* Copyright © Written by Yariv Gilad © <https://yarivgilad.com> 
---------------------------------------------------------------

==================================
  ## Make every 500 ms count!!
==================================

1. Implement your own *EventEmitter* class 
  - It has an *on* method that enables us to add callbacks
    that will be called when an event occurs
  - It has an *off* method to remove a callback from a given event name
  - It has an *emit* method that call all callbacks registered to a given event
    The *emit* method takes an event name, and any payload/s to pass to its registered callbacks.

2. Implement a *Clock* class which inherits from *EventEmitter*
   - The Clock has the *start* *stop* and *tick* methods
   - It has a default of 1000ms tick interval 
     but accepts an optional different ms interval value in its constructor.
   - It manages its own count value
   - It signals a STARTED, STOPPED & TICK events
     and sends its count value as a payload.
   - Have a look at *index.js* to see the new instance creation and usage.

------------------------------------------------
/* Bonus tasks - enhance the EventEmitter */
------------------------------------------------
3. Implement a *once* method. same as *on* but happens only once!
4. Implement a *listeners* method 
   it returns ALL callbacks of a given event name.
5. Implement an *eventNames* method
   // returns ALL event names
6. Implement a *removeAllListeners* method
   it removes all listeners of a given event name


  ,_,
 (O,O)
 (   )
--"-"-------
Enjoy yourselves :)
Yariv

------------------------------------------------------------
[linkedin connect](https://www.linkedin.com/in/yarivgilad/)

<!-- prettier-ignore-end -->

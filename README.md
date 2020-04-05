# Promise example

A promise can be explicitly created using the **Promise** constructor. The constructor takes only one argument, a callback function taking 2 arguments, **resolve()** and **reject()**.

Inside the callback, you can perform any operations (both synchronous and asynchronous) you meed. Then, if everything went well, you call **resolve()** as a signal of success. If anything goes wrong inside the callback, you call **reject()** to indicate that the promise was not kept.



# DEPRECATED (This project has been moved to https://github.com/AlexanderElias/promise-tool)


# Promise Timers
A promised library of timers for Node.js and the browser. If you know the WindowTimers and promises you know how to use PromiseTimers.

## Install
`npm install promise-timers`

## API
- `PromiseTimers.setTimeout`
	- `delay` <Number> The number of milliseconds to wait before calling resolve.
	- `...args` <Any> Optional arguments to pass when the resolve is executed.

- `PromiseTimers.setInterval`
	- `delay` <Number> The number of milliseconds to wait before calling resolve.
	- `method` <Function> A function that repeats on each interval. This function will fire upon each interval unless one of the following returns are implemented.
		- Return Value Actions
			- `result` <Error> Any valid JavaScript error type. Will fire the reject and pass the error.
			- `result` <Boolean> A boolean that calls resolve if true or reject if false.
			- `result` <Any> Any thing returned besides `null`, `undefined`, `false`, and a valid `Error` type will resolve with that return value as the first argument.
			- `result` <Null, Undefined> Both are ignored and will not trigger the resolve or reject.
	- `...args` <Any> Optional arguments to pass when the resolve is executed.

- `PromiseTimers.setImmediate`
	- `...args` <Any> Optional arguments to pass when the resolve is executed.

- `PromiseTimers.clearTimeout`
	- `timeout` <Timeout> A Timeout object as returned by setInterval().

- `PromiseTimers.clearInterval`
	- `interval` <Interval> A Interval object as returned by setInterval().

- `PromiseTimers.clearImmediate`
	- `immediate` <Immediate> An Immediate object as returned by setImmediate().


## Example
```JavaScript
const PromiseTimers = require('promise-timers');
const delay = 500;

PromiseTimers.setTimeout(delay).then(function (args) {
	// this refers to timeout
	console.log(args);
	console.log('timeout done');
});

var i = 0;

function method () {
	// this refers to interval
	if (i > 5) {
		return true;
	} else {
		console.log(i);
		i++;
	}
};

 PromiseTimers.setInterval(delay, method).then(function (args) {
	// this refers to interval
	console.log(args);
	console.log('interval done');
});

PromiseTimers.setImmediate().then(function (args) {
	// this refers to immediate
   console.log(args);
   console.log('immediate done');
});

```

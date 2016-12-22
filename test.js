const PromiseTimers = require('./index.js');
const delay = 500;

// PromiseTimers.setTimeout(delay).then(function (args) {
// 	console.log(args);
// 	console.log('timeout done');
// });

var i = 0;

function method () {
	if (i > 3) {
		// return false;
		// return true;
		// return { hello: 'world' };
		// return new Error('oops');
	} else {
		console.log(i);
		i++;
	}
}

PromiseTimers.setInterval(delay, method).then(function (args) {
	console.log(args);
	console.log('interval done');
}).catch(function (error) {
	console.log(error);
});

// PromiseTimers.setImmediate().then(function (args) {
//    console.log(args);
//    console.log('immediate done');
// });

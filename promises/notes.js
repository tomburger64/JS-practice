// not running this code, these are just notes for myself
// https://youtu.be/QO4NXhWo_NM?si=MqBq6XcEGNmsejKx



// 2 ways of making a promise:
// - "manually" :
const manualPromise = new Promise((resolve, reject) => {"blah"})

// - using a promise related function, like fetch (and then manipulmating it however)
function gotData(){console.log(data);}
const smartPromise = fetch(API);
smartPromise.then(gotData)
// then (once smartPromise is done fetching) returns its callback fn

// all promise related functions can be found here → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise



// example used:

const API = "APIlink"

let promise = fetch(API);
promise.then(gotData);
promise.catch(gotErr);

function gotData(data){
    console.log(data);
}

function gotErr(err){
    console.log(err);
}

// then(doesThisIfPromiseTrue, doesThisIfPromiseFalse)
// catch has a callback fn that runs when the promise is rejected

// api's an api link
// new var that's a promise because the function following it makes it one
// then() used with the gotData callback fn which returns when the promise is successful
// catch() with gotErr callback fn which returns when it's unsuccessful

// then returns its callback when a promise is true (unless 2 args specified, where it's "ifTrue, ifFalse")
// catch returns its callback when a promise is false

// WHY USE CATCH => catch works and will callback even if then() itself doesn't work

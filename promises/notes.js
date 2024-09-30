// not running this code, these are just notes for myself
// https://youtu.be/QO4NXhWo_NM?si=MqBq6XcEGNmsejKx



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
// then new var that's a promise because of the function following it (has to be a promise function)

// 2 ways of making a promise:
// - "manually" :
const manualPromise = new Promise((resolve, reject) => {"blah"})

// - using a promise related function, like fetch (and then manipulmating it however)
function gotData(){console.log(data);}
const smartPromise = fetch(API);
smartPromise.then(gotData)
// then 
// all promise related functions can be found here → https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
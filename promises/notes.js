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




// compact version of the example
// in a single line :
fetch(API)
.then(data => console.log(data))
.catch(err => console.log(err));
// fetch(API).then((data) => console.log(data)).catch((err) => console.log(err))

// fetch makes a promise of API, and as it returns as true logs the data, or err if it's false



// using .json() also makes promises
// https://developer.mozilla.org/en-US/docs/Web/API/Response/json

fetch(API)
.then(response => {
    return response.json();
})
.then(json => {
    createP(json.word);
    return fetch(giphyAPI + json.word);
})
.then(response => {
    return response.json();
})
.then(json => {
    createImageBitmap(json.data[0].images['fixed_height_small'].url);
})
.catch(err => console.log(err));

// WHY USE JSON() ?
// json() returns the data as a JS object
// simply returning it using then returns "raw" data, which can be binary or text

// fetch the api
// convert it into json
// create a paragraph (createP) by specifying wwhat to put in (json.word)
// (createP is probably deprecated)
// fetch the api again
// FINISH COMMENTING THIS ↑↑↑↑↑↑↑↑

// not taking notes on what he does from this time stamp 18:40 because it apparently got errors and is mostly specific to the api showed as an example, when the goal is to understand (according to the guy from the video)
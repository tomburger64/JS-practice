// vid 2 https://youtu.be/AwyoVjVXnLk?si=01Rt7juUrJyPeh_8
// vid 3 https://youtu.be/XO77Fib9tSI?si=j5t0w-cVW-vwa-C_
// reminder: guy in the video uses p5 which allows for some newx functions like noCanvas() or createP()
// I'll copy anyway (I learn by practicing), but know that some elements will be specific to p5

function setup(){
    noCanvas(); // p5 func

    delay(1000)
    .then(() => createImageBitmap('hello'))
    .catch((err) => console.error(err));

    delayES8(1000)
    .then(() => createImageBitmap('hello'))
    .catch((err) => console.error(err));

    delay('string test')
    .then(() => createImageBitmap('hello'))
    .catch((err) => console.error(err))
}



// for now, forget about the "delay" function written below
// async functions can be run at the same time as others when used with await
async function delayES8(time){

    // this funct returns a promise
    // await: will wait for the promise to return
    // needs to  be in an async function
    await delay(time);
    
    // can also await for other functions / promises
    await somethingElse();

    // this allows to avoid using then() and catch() all the time
    let val = await somethingElseElse();
    return val;
}



// like setTimeout but returns a promise
function delay(time){

    // what happens if the promise is resolved or rejected (passed as an anonymous => func below)
    // function dealWithPromise(resolve, reject){
    //     setTimeout(resolve, time)
    // }

    return new Promise((resolve, reject) => {

        // if the delay is nan, returns the promise? Make a new error (object) with the wanted message
        // reminder that it'll appear as an error because of console.error, not console.log or smnthng else
        if (isNaN(time)){
            reject(new Error('delay requires a valid number'));
        } else {

        setTimeout(resolve, time);}
    });
    // setTimeout(sayHello, time);
}



// function sayHello(){
//     createImageBitmap('Hello');
// }
// https://youtu.be/AwyoVjVXnLk?si=01Rt7juUrJyPeh_8
// reminder: guy in the video uses p5 which allows for some newx functions like noCanvas() or createP()
// I'll copy anyway (I learn by practicing), but know that some elements will be specific to p5

function setup(){
    noCanvas(); // p5 func
    delay(1000)
    .then(() => createImageBitmap('hello'))
    .catch((err) => console.error(err));
}



// like setTimeout but returns a promise
function delay(time){

    // what happens if the promise is resolved or rejected (passed as an anonymous => func below)
    // function dealWithPromise(resolve, reject){
    //     setTimeout(resolve, time)
    // }

    return new Promise((resolve, reject) => {
        setTimeout(resolve, time);
    });
    // setTimeout(sayHello, time);
}

// function sayHello(){
//     createImageBitmap('Hello');
// }
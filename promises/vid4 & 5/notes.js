// https://youtu.be/chavThlNz3s?si=2iDenitxB0B7N6u9 v4
// https://youtu.be/01RTj1MWec0?si=EnpFYCYISxFU_Yxr v5

const wordnikAPI = "APIlink"
const giphyAPI = "APIlink"

function setup(){

    noCanvas(); //p5 func

    // using Promise.all to keep the right order when calling several funcs
    let promises = [wordGIF(3), wordGIF(4), wordGIF(5)] // can also use a loop to call them
    Promise.all(promises) //need to call promise.all with an array directly or indirectly (here indirectly, through "promises")
    .then(results => {
        // then if promises are all true
        for (let i = 0; i < results.length; i++){ // make a loop
            createP(results[i].word); // at every iteration, places the word / img at the i index, hence in the "right order"
            createImg(results[i].img);
        }
    })
    .catch(err => console.error(err));
    // problem with this method is if only 1 of the promises fails, you get an error



    // added in vid5, specify amount of chars called in wordnik api
    wordGIF(3).then(results => {
        // if the wordGIF func returns as true, then create <p></p> with the word obj prop and <img></img> with the img object prop
        createP(results.word); // p5 function
        createImg(results.img); // p5 function
    })
    .catch(err => console.error(err));
    
    // no more chaining, just doing them in parallel by calling them seperatly
    wordGIF(4).then(results => {
        createP(results.word); // p5 function
        createImg(results.img); // p5 function
    })
    .catch(err => console.error(err));
    
    wordGIF(5).then(results => {
        createP(results.word); // p5 function
        createImg(results.img); // p5 function
    })
    .catch(err => console.error(err));



    // // chained version ↓
    // // added in vid5, specify amount of chars called in wordnik api
    // wordGIF(4).then(results => {
    //     // if the wordGIF func returns as true, then create <p></p> with the word obj prop and <img></img> with the img object prop
    //     createP(results.word); // p5 function
    //     createImg(results.img); // p5 function
    //     return wordGIF(5);
    //     // return wordGIF func to use it twice ↓ (done in vid5)
    // })
    // .then(results => {
    //     // again, if wordGIF's promise is successful in the new promise right above
    //     // results contains wordGIF returned right above ↑
    //     createP(results.word); // p5 function
    //     createImg(results.img); // p5 function)
    //     // creates another p and img tag with a new word and image
    // })
    // .catch(err => console.error(err));
}

// new async function (variant of oldWordGIF() below ↓ )
async function wordGIF(num){

    // done in vid5, specify the amount of characters to the called word ↓
    let response1 = await fetch(wordnikAPI + '&minLength='+num+'&maxLength='+num); // first fetch the api and specify the char limit
    let json = await response.json(); // convert the fetch req into json
    let word = json1.word; // define word var to be = to the word object prop (from the json1 object)
    let response2 = await fetch(giphyAPI + json1.word); // bad naming, but makes another fetch req to the api adding the word object prop to the req
    let json2 = await response2.json(); // convert that new req into json
    let img = json2.data[0].images['fixed_height_small'].url // also get the img from the json2 object

    return {
        /* return the wanted stuff:
        - the word object prop (literally a word according to the picked gif)
        - the img url object prop (string url) */
        word: json1.word,
        img: img_url
    }
}





// reminder: changing this ↓ into an async func (done above ↑)
// const API = "api link"
function oldWordGIF(){
    fetch(API)
    .then(response => response.json())
    .then(json => {
        createP(json.word);
        return fetch(giphyAPI + json.word);
    })
    .then(response => response.json())
    .then(json => {
        createImageBitmap(json.data[0].images['fixed_height_small'].url);
    })
    .catch(err => console.log(err));
}
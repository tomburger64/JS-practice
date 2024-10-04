// https://youtu.be/chavThlNz3s?si=2iDenitxB0B7N6u9

const API = "APIlink"

function setup(){

    noCanvas();

    wordGIF().then(results => {
        createP(results.word); // p5 function
        createImg(results.img); // p5 function
    })
    .catch(err => console.error(err));

}

// new async function (variant of oldWordGIF() below ↓ )
async function wordGIF(){

    let response1 = await fetch(API); // first fetch the api
    let json = await response.json(); // convert the fetch req into json
    let word = json1.word; // define word var to be = to the word object prop (from the json1 object)
    let response2 = await fetch(giphyAPI + json.word); // bad naming, but makes another fetch req to the api adding the word object prop to the req
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





// reminder: change this ↓ into an async func (done above ↑)
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
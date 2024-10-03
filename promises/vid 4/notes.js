// https://youtu.be/chavThlNz3s?si=2iDenitxB0B7N6u9

const API = "APIlink"

// p5 stuff
function setup(){
    noCanvas();
}

// reminder: we're going to change this ↓ into an async func
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

// new async variant
async function wordGIF(){

    let response1 = await fetch(wordnikAPI);
    let json = await response.json();
    let word = json1.word;
    let response2 = await fetch(giphyAPI + json.word);
    let json2 = await response2.json();
    let img = json2.json.data[0].images['fixed_height_small'].url

    return {
        word: json1.word,
        img: img_url
    }
}
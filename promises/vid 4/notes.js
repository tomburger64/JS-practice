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

// new async variant
async function wordGIF(){

    let response1 = await fetch(wordnikAPI);
    let json = await response.json();
    let word = json1.word;
    let response2 = await fetch(giphyAPI + json.word);
    let json2 = await response2.json();
    let img = json2.data[0].images['fixed_height_small'].url

    return {
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
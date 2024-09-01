// https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB
// replace every char in a string with the char following it in the alphabet

let encoder = (str) => {
    let encodedString = "";

    for (let i = 0; i < str.length; i++){ //auto incremented loop, to go through each letter of the str
        let letter = str.charAt(i); //renvoie chaque lettre individuelle
        // console.log(letter)

        let charCode = letter.charCodeAt(); //renvoie le code de la lettre
        // console.log(charCode)

        let newCharCode = charCode + 1; // renvoie le char code et ++ .fromCharCode 
        // console.log(newCharCode)

        let newLetter = String.fromCharCode(newCharCode); //convertit le code en lettre
        // console.log(newLetter)

        encodedString += newLetter //add each new encoded letter to an external var to remake a single word out of it
    }

    console.log(encodedString)
}

encoder('Fromage')

//had to ask gpt to help me to figure a way to make the letters back into one word



//correction (I fear he's gonna make it in like 2 lines again)

const moveCharsForward = (str) => str
.split('') //split makes every char return as an array
.map(char => String.fromCharCode(char.charCodeAt(0) + 1))
//for each array element, converts the string into a utf code and sends it back as a string once 1 added
.join(''); //turns the array elements into one, hence making a single string

console.log(moveCharsForward('welp'));

//I was right to be afraid lol
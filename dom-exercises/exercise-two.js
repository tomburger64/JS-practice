// https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB
// get the extension of a filename



// 'file' is the file name
// 'extension' is the array, using the map function via the temp var 'x'
//for each array element, if it's at the end of the 'file' (name), it returns it
//.length to get the length of the file
// slice() to get the last 3 letters of the file name according to the length

const whatExt = (file) =>{

    const fileLength = file.length //get the length of the file name
    const lastThree = fileLength - 3 //get the "length - 3" chars' indexes, doesn't work if the extension is ! than 3 chars long


    const extensionIndex = file.indexOf('.')
    //find the '.' character and take what's after, doesn't work if the file has an '.' in its name


    console.log(`The file extension is a(n) ${file.substring(lastThree, fileLength)} (using last 3 chars method)`) //extract the last 3 characters

    console.log(`The file extesion is a(n) ${file.substring(extensionIndex, fileLength)} file (using the following '.' chars method)`) //extract the last 3 characters
}


//write your file name in here ↓
whatExt('abcdefg.exe')



//correction

//slice takes everything AFTER by default, no need for a "length" (I sort of didn't think about that)
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))

console.log(getFileExtension('index.html'))
console.log(getFileExtension('another_one.exe'))




// new attempt after seeing the correction

const newWhatExt = (name) => name.slice(name.lastIndexOf('.'))

console.log(newWhatExt('havea.kitkat'))

// actually wrote it like this because I'm still not used to arrow functions:
// const newWhatExt = (name) => { name.slice(name.lastIndexOf('.')) }
// https://www.youtube.com/watch?v=N65RvNkZFGE&list=PLpc_YvcwbxaSn6jn0VaTcG8A0Grgs1GSB
// get the current date, outputing the following format 'yyyy-mm-dd' (or any other order)

const entireDate = new Date() //why was it so easy to find every variant of the date function but not simply just getting the live date with it, I want to cry
// console.log(entireDate)

const DMYDate = `${entireDate.getDate()} / ${entireDate.getMonth() + 1} / ${entireDate.getFullYear()}`
//getMonth() is displaying 1 digit earlier than the actual month than it should be, so added +1 (prob bc of an index 0)
console.log(DMYDate)



// correction
const formatDate = (date = new Date()) => {
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`
}

console.log(formatDate())
//think his is cleaner than mine
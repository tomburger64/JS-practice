// https://www.youtube.com/watch?v=tFz502-LXU8&list=PLpc_YvcwbxaSX4QlwXZ_vjBAZA4cNgIxN&index=7
// 3) Get a list of the people's full name (firstName and lastName).

const people = [
    { firstName: 'Sam', lastName: 'Hughes'},
    { firstName: 'Terri', lastName: 'Bishop'},
    { firstName: 'Jar', lastName: 'Burke'},
    { firstName: 'Julio', lastName: 'Miller'},
    { firstName: 'Chester', lastName: 'Flores'},
    { firstName: 'Madison', lastName: 'Marshall'},
    { firstName: 'Ava', lastName: 'Pena'},
    { firstName: 'Gabriella', lastName: 'Steward'},
    { firstName: 'Charles', lastName: 'Campbell'},
    { firstName: 'Tiffany', lastName: 'Lambert'},
    { firstName: 'Antonio', lastName: 'Gonzalez'},
    { firstName: '', lastName: 'Gonzalez'},
    { firstName: 'Aaron', lastName: 'Garrett'},
    { firstName: 'Aaron', lastName: ''},
];

let fullName = people.map((names) => names.firstName + " " + names.lastName)
// console.log(fullName)

//since it's really simple I'll try to do it with filter
// first time using filter, had to use chatgpt to explain me
let fullName2 = people.filter((names) => {
    if (names.firstName && names.lastName){
        console.log(names.firstName + " " + names.lastName)
    }
})
// no need to specify anything to return true or false, just mention vars / functions


console.log("-----")
//correction
console.log(people.map(person => `${person.firstName} ${person.lastName}`))

//destrucuring
console.log(people.map(({firstName, lastName}) => `${firstName} ${lastName}`))
//I get it but I've barely used destructuring so far, I guess you can use it as an arrow function

// using spread opperator, making a new object and fullName propriety
console.log(people.map(person => ({...person, fullName: `${person.firstName} ${person.lastName}`})))
//↑ this one doesn't check if the person's got a first name and last name though
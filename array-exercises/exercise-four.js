// https://www.youtube.com/watch?v=tFz502-LXU8&list=PLpc_YvcwbxaSX4QlwXZ_vjBAZA4cNgIxN&index=7

const people = [
    { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
    { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
    { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
    { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
    { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
    { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
    { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
    { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
    { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
    { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
    { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
    { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
];

// 4) Get a list of people in the array ordered from youngest to oldest.
//had the wrong approach, you don't apply sort to elements as they're being worked with map(), you apply sort directly

//I had to cheat for this one
//I did try to do something with Date to make DOB a date (and not stay a string) at some point, but it wasn't as direct as this and didn't work out
//I'm pretty sure I never put ".DOB" after a and b too

const sorted = people.sort((a, b) => new Date(b.DOB) - new Date(a.DOB))
console.log(sorted)
//a compares itself to b, 2 values from the DOB proprety in theo object in the ppl array
//convert a and b into dates so that they can be properly compared, and sort using b - a


console.log("-----")
//correction
console.log(people.sort((personA, personB) => new Date(personA.DOB) - new Date(personB.DOB)))
//basically the same as above




//fails, aka why I lost my time ↓



// let DOBs = people.map((x) => x.DOB)
// console.log(DOBs)



// console.log(people.map((x) => {
//     return new Date(x.DOB).sort()
// }))



// let sorted = DOBs.sort((a, b) => {
//     let yearA = new Date(a).getFullYear()
//     let yearB = new Date(b).getFullYear()

//     yearA.localeCompare(yearB) //← doesn't work

//     a.localeCompare(b)
// })
// console.log(sorted)



// let sorted = DOBs.sort((a, b) => {
//     let yearA = new Date(a).getFullYear()
//     let yearB = new Date(b).getFullYear()

//     yearA - yearB
//     //shows the right results but idk what to o afterwards

//     // a.localeCompare(b)
// })
// console.log(sorted)
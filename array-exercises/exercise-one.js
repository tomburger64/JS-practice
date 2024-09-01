//https://www.youtube.com/watch?v=tFz502-LXU8&list=PLpc_YvcwbxaSX4QlwXZ_vjBAZA4cNgIxN&index=7
// 1) What is the average income of all the people in the array?

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

// 1
//complete newbie to destructuring, taking a lot of time to understand stuff without cheating

//reduce & parseint
// reduce fait executer une fonction a chaque element de l'array
// le résultat devient "l'accumulateur" qui est l'argument de la fonction (réutilisé à chaque fois)
//average = sum / amount of nums used to make the sum

// step1 get the salaries X
// step 2 sum them together
// step 3 make an avg of them


const salariesStr = people.map(({salary}) => salary) //map() through the ppl array, but instead of a temp var passed as an arg into the arrow func, it's an object proprety salary. The function only calls it's parameter because the "magic" happens beforehand, the function only calls its parameter
console.log(salariesStr)

const salaries = salariesStr.map((x) => parseInt(x))
console.log(salaries)
//parseInt() the array values cuz they're strings using map to transform every element

const salariesSum = salaries.reduce((accumulator, element) => accumulator + element )
console.log(salariesSum)
// accumulating the value of each array element to sum it

// function sum(accumulator, element){
//     return accumulator + element
// }

const howManySalaries = salariesStr.length
// console.log(howManySalaries)
// how many salaries there are, could be more complicated if they didn't all have a salary but they all do

const avgSalary = salariesSum / howManySalaries
console.log(`The average salary of everyone registered is $${avgSalary}`)
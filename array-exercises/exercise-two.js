//https://www.youtube.com/watch?v=tFz502-LXU8&list=PLpc_YvcwbxaSX4QlwXZ_vjBAZA4cNgIxN&index=7
// 2) Who are the people that are currently older than 30?

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

// get everyone's dob
// using date function & variants, substract current date (m d y format) with each dob
// if dob >30 get the whole dude
// also I hate the mm dd yyyy format

const [{DOB}] = people
console.log(DOB) //returns the first dob

const wholeDOBs = people.map((x) => new Date(x.DOB))
console.log(wholeDOBs) //returns dobs as whole dates
//using map to pass an arrow func that calls the 'x' temp var which looks for every instance of DOB and retruns it as a date using new Date() (otherwise is a string or numbers)

//need to get the format right, either by finding the magic function which does that specifically or by dividing each M D Y and putting them back together

DOBsMonth = wholeDOBs.map((x) => x.getMonth() + 1) //+1 needed cuz it's an index
// console.log(DOBsMonth)
DOBsDay = wholeDOBs.map((x) => x.getDate())
// console.log(DOBsDay)
DOBsYear = wholeDOBs.map((x) => x.getFullYear())
// console.log(DOBsYear)

const fullDOBs = join





//get thecurrent date (M D Y)
const currentWholeDate = new Date()
// console.log(currentWholeDate)

const currentMonth = currentWholeDate.getMonth()
const currentDay = currentWholeDate.getDay() + 1
const currentYear = currentWholeDate.getFullYear()
const currentDate = `${currentMonth}/${currentDay}/${currentYear}`

// console.log(currentDate)


// 3) Get a list of the people's full name (firstName and lastName).
// 4) Get a list of people in the array ordered from youngest to oldest.
// 5) How many people are there in each department?
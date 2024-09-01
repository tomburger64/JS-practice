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
// console.log(DOB) //returns the first dob

const wholeDOBs = people.map((x) => new Date(x.DOB))
// console.log(wholeDOBs) //returns dobs as whole dates
//using map to pass an arrow func that calls the 'x' temp var which looks for every instance of DOB and retruns it as a date using new Date() (otherwise is a string or numbers)

const DOBs = wholeDOBs.map((x) => x.getMonth() + '/' + x.getDate() + '/' + x.getFullYear())
// console.log(DOBs)
//since wholeDOBs is an array, need to use map to put the right format to each element (x temp var + getmonth and etc to get the right format)


//check if the persons would be > 30 today

    //get the age according to each DOB
    const isOver30 = DOBs.map((x) => {
        if (x.getFullYear() > Date().getFullYear()){ //if year of birth is above 30, true
            console.log(true)
        }
        else if (x.getMonth() > Date().getMonth()){
            console.log(true)
        }
        else if (x.getDate() > Date().getDate()){
            console.log(true)
        }
        else{
            console.log(false)
        }
    })

    console.log(isOver30)

    //if the guy's born < 30 years ago return true (for now, then the name according to the index or something idk yet)
    //else if the guy's born 30 years ago, if the month is < to the actual month right now, return true
    //else if the guy's born 30 years ago at this month, check if day < actual day rn, return true








// ↓ how I lost way too much time (mistakes, leads nowhere) ↓

//need to get the format right, either by finding the magic function which does that specifically or by dividing each M D Y and putting them back together
// DOBsMonth = wholeDOBs.map((x) => x.getMonth() + 1) //+1 needed cuz it's an index
// console.log(DOBsMonth)
// DOBsDay = wholeDOBs.map((x) => x.getDate())
// console.log(DOBsDay)
// DOBsYear = wholeDOBs.map((x) => x.getFullYear())
// console.log(DOBsYear)

// console.log(`${DOBsMonth} / ${DOBsDay} / ${DOBsYear}`) //puts every month, every day & year all at once aaaaaah


//get thecurrent date (M D Y)
// const currentWholeDate = new Date()
// console.log(currentWholeDate)

// const currentMonth = currentWholeDate.getMonth()
// const currentDay = currentWholeDate.getDay() + 1
// const currentYear = currentWholeDate.getFullYear()
// const currentDate = `${currentMonth}/${currentDay}/${currentYear}`
// console.log(currentDate)
//nope this is terrible, going back to the past
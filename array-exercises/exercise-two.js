//https://www.youtube.com/watch?v=tFz502-LXU8&list=PLpc_YvcwbxaSX4QlwXZ_vjBAZA4cNgIxN&index=7
// 2) Who are the people that are currently older than 30?

const people = [
    { firstName: 'same', lastName: 'year', DOB: '01/01/1994', department: 'Development', salary: '45000' },
    { firstName: 'same', lastName: 'month', DOB: '01/09/1994', department: 'Development', salary: '35000' },
    { firstName: 'same', lastName: 'day', DOB: '04/09/1994', department: 'Marketing', salary: '38000' },
];

// get everyone's dob
// using date function & variants, substract current date (m d y format) with each dob
// if dob >30 get the name too
// also I hate the mm dd yyyy format

const [{DOB}] = people
// console.log(DOB) //returns the first dob

const wholeDOBs = people.map((x) => new Date(x.DOB))
// console.log(wholeDOBs) //returns dobs as whole dates
//using map to pass an arrow func that calls the 'x' temp var which looks for every instance of DOB and retruns it as a date using new Date() (otherwise is a string or numbers)

const DOBs = wholeDOBs.map((x) => x.getMonth() + '/' + x.getDate() + '/' + x.getFullYear())
// console.log(DOBs)
//since wholeDOBs is an array, need to use map to put the right format to each element (x temp var + getmonth and etc to get the right format)
// MAKES DOBs A STRING!!!

//I'll try to treat the data here and not after tring to put the dates together
const isOver30 = wholeDOBs.map((x) => {
    
    //if bod year < current year - 30 (if > 30yo)
    //if year = current year, if bod month < current month (if > past month of birth)
    //then if month = current month, if bod day < current day (if > past day ob)

    if (x.getFullYear() < new Date().getFullYear() + 1 - 30){
        // console.log(new Date().getFullYear() - 30)
        console.log(x.getFullYear() + " dob")
        console.log("est plus grand que 1994?")
        console.log(x.getFullYear() < new Date().getFullYear() + 1 - 30)

        console.log("Sorry, you're old (year)")
        console.log("---")
    }

    else if (x.getFullYear() === new Date().getFullYear() + 1 - 30 && x.getMonth() > new Date().getMonth()){
        
        console.log("Sorry, you're old (month)")
        
    }

    else if (x.getFullYear() === new Date().getFullYear() + 1 - 30 &&
        x.getMonth() > new Date().getMonth() &&
        x.getDate() < new Date().getDay() ){

        console.log("Sorry, you're old (day)")
        
    }

    //how to get the related name to the age its corresponding?
    //auto icremented index I guess?
    //yes I'm schizo talking
})










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

// is over 30? fail ↓

//check if the persons would be > 30 today

    //get the age according to each DOB
    // const isOver30 = Date.parse(DOBs.map((x) => {
    //     if (x.getFullYear() > Date().getFullYear()){ //if year of birth is above 30, true
    //         console.log(true)
    //     }
    //     else if (x.getMonth() > Date().getMonth()){
    //         console.log(true)
    //     }
    //     else if (x.getDate() > Date().getDate()){
    //         console.log(true)
    //     }
    //     else{
    //         console.log(false)
    //     }
    // }))

    // console.log(isOver30)

    //if the guy's born < 30 years ago return true (for now, then the name according to the index or something idk yet)
    //else if the guy's born 30 years ago, if the month is < to the actual month right now, return true
    //else if the guy's born 30 years ago at this month, check if day < actual day rn, return true
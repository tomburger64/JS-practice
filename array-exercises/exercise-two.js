//https://www.youtube.com/watch?v=tFz502-LXU8&list=PLpc_YvcwbxaSX4QlwXZ_vjBAZA4cNgIxN&index=7
// 2) Who are the people that are currently older than 30?

//MM DD YYYY
// very old → same year → same month → same day → younger
// very lightly spongebob themed
const people = [
    { firstName: 'SpongeBob', lastName: 'SquarePants', DOB: '01/01/1900', department: 'Development', salary: '45000' },

    { firstName: 'Patrick Desmond', lastName: 'Star', DOB: '04/01/1994', department: 'Development', salary: '45000' },
    { firstName: 'Plankton', lastName: 'Sheldon J.', DOB: '09/04/1994', department: 'Development', salary: '35000' },
    { firstName: 'Eugene Harold', lastName: 'Krabs', DOB: new Date(), department: 'Marketing', salary: '38000' },

    { firstName: 'Jennifer Oliva', lastName: 'Cheeks', DOB: '01/01/2020', department: 'Marketing', salary: '38000' },
];

const wholeDOBs = people.map((x) => {
    let names = x.firstName + " " + x.lastName
    return [names, new Date(x.DOB)]
})
console.log(wholeDOBs)
//[0] = name, [1] = bod

const isOver30 = wholeDOBs.map((x) => {
    
    //if bod year < current year - 30 (if > 30yo)
    //if year = current year, if bod month < current month (if > past month of birth)
    //then if month = current month, if bod day < current day (if > past day ob)
    //also detect if it's all = (birthday)

    //since now dobs are returned in an array, call the array index to call the data:
    let dob = x[1]
    let names = x[0]

    if (dob.getFullYear() < new Date().getFullYear() - 30){

        console.log(names + ", you being born in " + dob.getFullYear() + " makes you older than 30")
    }

    else if (dob.getFullYear() === new Date().getFullYear() - 30 && dob.getMonth() < new Date().getMonth()){
        
        console.log(names + ", you being born on the " + (dob.getMonth() + 1) + "th month of " + dob.getFullYear() + " makes you older than 30")
        
    }

    else if (dob.getFullYear() === new Date().getFullYear() - 30 &&
        dob.getMonth() === new Date().getMonth() &&
        dob.getDate() < new Date().getDay() ){

        console.log(names + ", you being born on the " + dob.getDate() + "/" + (dob.getMonth() + 1) + "/" + dob.getFullYear() + " makes you older than 30 (mm/dd/yyyy)")        
    }

    else if (dob.getFullYear() === new Date().getFullYear() - 30 &&
        dob.getMonth() === new Date().getMonth() &&
        dob.getDate() === new Date().getDay() + 1 ){

        console.log(names + ", you being born on the " + dob.getDate() + "/" + dob.getMonth() + "/" + dob.getFullYear() + " means you're turning 30 today ! Hbd")
        
    }
    else{
        console.log(names + ", you being born in " + dob.getFullYear() + " makes you younger than 30 years old")
    }
})

// I had to use chatgpt to help me towards the end
// didn't have the logic of returning something as an array to have seperate elements returned in one place while still being usable and using vars to use this array (x[0] and x[1])







// --- ↓ how I lost way too much time (mistakes, leads nowhere, but hey I didn't cheat) ↓ ---



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




    
    // const DOBs = wholeDOBs.map((x) => x.getMonth() + '/' + x.getDate() + '/' + x.getFullYear())
// console.log(DOBs)
//since wholeDOBs is an array, need to use map to put the right format to each element (x temp var + getmonth and etc to get the right format)
// MAKES DOBs A STRING!!! (yup, guess who forgot about it)
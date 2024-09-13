// https://www.youtube.com/watch?v=tFz502-LXU8&list=PLpc_YvcwbxaSX4QlwXZ_vjBAZA4cNgIxN&index=7

//removed some data from the objects cuz useless
const people = [
    { firstName: 'Sam', lastName: 'Hughes', department: 'Development' },
    { firstName: 'Terri', lastName: 'Bishop', department: 'Development' },
    { firstName: 'Jar', lastName: 'Burke', department: 'Marketing' },
    { firstName: 'Julio', lastName: 'Miller', department: 'Sales' },
    { firstName: 'Chester', lastName: 'Flores', department: 'Development' },
    { firstName: 'Madison', lastName: 'Marshall', department: 'Sales' },
    { firstName: 'Ava', lastName: 'Pena', department: 'Development' },
    { firstName: 'Gabriella', lastName: 'Steward', department: 'Marketing' },
    { firstName: 'Charles', lastName: 'Campbell', department: 'Sales' },
    { firstName: 'Tiffany', lastName: 'Lambert', department: 'Development' },
    { firstName: 'Antonio', lastName: 'Gonzalez', department: 'Office-Management' },
    { firstName: 'Aaron', lastName: 'Garrett', department: 'Development' },
];

// 5) How many people are there in each department?

// 1 make an array of deps

// 2 make a function
// 3 filter each value of the array
// 4 look for that "each value" to count how many times it's in the array

const deps = people.map((x) => x.department)

// had to cheat to figure out how to count the deps without having them pre-registered but rather detected from the deps array directly (see fails at the bottom of this code)

//didn't think abt using an object to store data, thought about getting the dep name as a variable and adding +1 everytime it's detected or something like that

//I don't have the right logic yet

function depCount(){
    let depCount = {}
    //object to store the dep name AND its count

    deps.forEach(department => {
    //for each value in the deps array
        const count = deps.filter(dep => dep === department).length
        //filter creates a new array, adding the department (dep) everytime it's equal to itself (department, same thing but through the forEach), and counts itself everytime it's detected in the array
        //comparing department to itself indirectly is necessary so that we can keep the count of every instance of each department

        depCount[department] = count
        //stores the count of the dep in the depcount object
    })
    console.log(depCount)
}
depCount()

// took too much time doing this to end up doing the braining part with AI so I'll just do more exercises to train later






//fails ↓



//at first, making a single array containing only the deps
// const departments = people.map((x) => x.department)

//then using find() to detect the dep (using if statements to avoid having to implement new deps manually outside of here ↓)
// function whatDep(departments){
//     if (departments.find(department === "Development")){
//         return "Dev "
//     }
//     else if (departments.find(department === "Office Management")){
//         return "Office Management "
//     }
//     else if (departments.find(department === "Sales")){
//         return "Sales "
//     }
//     else if (departments.find(department === "Marketing")){
//         return "Marketing "
//     }
// }
// console.log(whatDep())

//this  probably could've worked if I fixed it but I'd rather "detect" what department is there istead of recognizing it



// 1 make an array of deps
// 2 make a function
// 3 make a var that filters each value of the array
// 4 look for that "each value" to see how many times it's in the array
// function howManyDeps(){

//     //for each array element, returns that element
//     let department = deps.map((department) => department)

//     //looks for filterElement in the array, return filterElement and the amount of times it's filtered in the array

//     deps.filter(department => {
//         //if department is there more than once in the array
//         if (){
            
//         }
//     })

// }
// howManyDeps()
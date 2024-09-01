let lap = 0

//funciton
// function lapCounter(lap){
//     if (lap <= 3){
//         lap += 1
//         console.log(lap)
//         lapCounter(lap)
//     }

//     else{
//         console.log(lap)
//     }
// }

//arrow function
const lapCounter = ((lap) => {
    if (lap < 3){
        lap += 1
        console.log(lap)
        lapCounter(lap)
    }

    else {
        // console.log(lap)
    }
})

lapCounter(lap)
// https://youtu.be/4K7kN4b1-ok?si=ExVJCfIQtjkPPtWk&t=284

const users = [
    { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
    { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
    { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
    { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
    { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
    { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
    { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
    { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
    { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
    { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
];

const comments = [
    { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
    { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
    { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
    { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
    { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
    { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
    { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
];

// 4) Add the user's first and last name to each comment in the comments array

// some users commented a few times on their account, not just once

//had to cheat, didn't have the right approach
function addNames(){
    //for each individual comment
    comments.forEach(comment => {
        let user = users.find(user => user.id === comment.userId)
        // ↑ find the same user id in the users array that's in the comments array

        //if user has a value (if the above equation worked)
        if (user){
            // adds the firstName and lastname proprety to each comment object
            comment.firstName = user.firstName
            comment.lastName = user.lastName
            //used to think you had to use push(), forgot we're talking array of objects, not just arrays
        }
    })

    return comments
}
console.log(addNames())



console.log("---")
//correction
console.log(comments.map(comment => {
    // new array made (map())
    const {firstName, lastName} = users.find(user => user.id === comment.userId)
    // deconstructs the firstName and lastName if the user id that's = to the comment's id
    return {...comment, firstName, lastName}
    // for each comment, returns the contents of the comment using a spread opp, adn adding the names
}))










// fails ↓

// function addNames(){
    
//     const userIds = users.find(who => who.id === comments.find(comment => comment.userId))
//     console.log(userIds)
//     // finds a user id thats = to a comment id
//     // now do that for each comment, one by one
//     // make something that returns both objects of the 2 arrays with the same id
// }

// addNames()


//-

// for each object in comments,
// make a variable that's going through each comment and gets its id
// add the names corresponding to each comment's id

// function addNames(){
//     const eachComm = comments.map(comment => {

//         let comm = users.find(user => user.id === comment.userId) // get the comm user id and its corresponding id

        


//         return comm
//     })

//     return eachComm
// }
// console.log(addNames())



// - 

// //first thing we want to do is push so let's try to push first
// let test = comments.push(x => x.userId === users.id ? users.firstName : "error")
// //we want to push the names that have the same id as the comment

// console.log(test)


// -
// let userNames = users.forEach(user => user.id === commentsId ? commentsId.push(user.firstName + user.lastName) : "error")

// -
// let commentsId = comments.map(ID => ID.userId)


// -
// last try before cheating
// function addNames(){

//     let test = comments.map(comm => {
//         if (users.find(user => user.id === comm.userId)){
//             comments.push(users.join(user => user.firstName))
//             return comments
//         }
//     })

//     return test
// }
// yt link here

const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]},
    { orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
        { productId: '567', price: 30 },
        { productId: '678', price: 80 },
    ]},
    { orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '789', price: 12 },
        { productId: '890', price: 90 },
    ]},
        { orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
        { productId: '901', price: 43 },
        { productId: '123', price: 55 },
    ]},
];

// 3) Have all the orders been delivered?
console.log("should be 'true false true true true'")



const deliveriesData = orders.map((x) => x.delivered === true) //returns true for every instance of delivered = true
console.log(deliveriesData)


//same thing but reverse, returns true when has not been delivered
const hasDelivered = deliveriesData.map((x) => x === false)
console.log(hasDelivered)














// fails



//look through every instance of this array
// const hasDelivered = orders.map((x) => {

    //use reduce to compile every state for delivered and check if it's all true
    // let states = x.reduce((acc, state) => acc + state.delivered)
    // if (states.map((y) === true)){
        // console.log("all true")
    // }
    // else{
        // console.log("not all true")
    // }
// })



// ---

// const deliverStates = orders.reduce((acc, state) => [acc + "," + state.delivered])

// const hasDelivered = deliverStates.map((x) => x === true ? true : false )
// console.log(hasDelivered)
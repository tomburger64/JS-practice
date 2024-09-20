// https://youtu.be/QsUSmmEf1JE?si=WiUDuvbyULQDMOCJ&t=354

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

// 5) Have any products with an id of 123 been sold?

// returns the objects elements that have a productId of 123 inside each object in the orders
// if they're here, they're in an order
// won't go deeper with that problem haha (see comments above fails in exercise 4)

console.log(orders.map((x) => x.items.filter((id) => id.productId === '123')))
//hey I did it in one line this time



console.log("---")
//correction
console.log(orders.reduce((acc, order) => acc + order.items.reduce((acc, item) => acc + (item.productId === '123'), 0), 0))
// looked around for different answers on the video guy's git repo, a lot of different answers possible, less or more detailed
// would've done detailed in this exercise if I didn't already done it for some past exercises and got ratio'd with a one line solution that just works

// tldr, as long as it works accordingly to what's asked, I'll consider it done



//fails ↓

// const productSold = orders.filter((order) => order.items.productId === '123')
// console.log(productSold)

// console.log(orders.map((x) => x.items && x.items.productId === '123'))
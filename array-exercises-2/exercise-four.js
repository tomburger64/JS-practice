// https://youtu.be/QsUSmmEf1JE?si=ywdqgbWknmOSx7-R&t=290

const orders = [
    { orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
        { productId: '123', price: 55 },
        { productId: '234', price: 30 },
    ]},
    { orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
        { productId: '234', price: 30 },
    ]}
];

// 4) Has the customer with ID '123' made any orders?

//what shows if there's an order has been made precisely
// > if there's 1 >= objects in the items array

// console.log(orders.map((x) => x.items.length >= 1))
//works for every order, returns true or false in order if one order doesn't have any object in items

// console.log(orders.map((x) => x.customerId === '123' && x.items.length >= 1))
//works but still returns a value for the others

const orderId = '123'
const order123 = orders.filter((x) => x.customerId === orderId)
console.log(order123.map((hasOrder) => hasOrder.items.length >= 1 ? `order ${orderId} has made orders` : `order ${orderId} has NOT made any order`))
//please comment the customer 123's items' objects if you want to see the if statement work



console.log("---")
//correction
console.log(orders.some(order => order.customerId === '123'))
//returns true if the id '123' is in the data
//didn't know some(), too bad

//also would it make sense to have a customer ID without having any orders from the customer?
//if the customer has an account maybe ? Unless it's like data from in-store purchases directly but then why make this "does this customer have any orders?" if they all do have some




//fails ↓

// const hasOrder = orders.items.map((x) => x.orderId === true )
// console.log(hasOrder)
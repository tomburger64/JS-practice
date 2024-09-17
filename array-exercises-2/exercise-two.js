// https://youtu.be/QsUSmmEf1JE?si=JuCzDTKKYCZZ5FAy&t=140

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

// 2) Create a new property on each order with the total price of items ordered.
//can't directly reach to the price with one function, so maybe reduce is used to sum up and maybe map to reach the items' object(s)

const prices = orders.map((x) => x.items.map((item) => item.price))
//goes through each order and looks for every "items" where it, inside, looks for every instacne of "price"
console.log(prices)

//last step, sinc everything is an array inside an array, need to use map again to then apply reduce and accumulate each price array's value
console.log(prices.map((x) => x.reduce((accumulator, price) => accumulator + price)))



console.log("---")
//correction
console.log(orders.map(order => ({order, orderTotal: order.items.reduce((acc, item) => acc + item.price, 0)})))
//adds orderTotal to each "order" object and also uses reduce to sum the price values

//more advanced and compact, and actually returns the whole object with the price sum which I did not do (woops)
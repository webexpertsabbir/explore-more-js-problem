const shopingCart = [
    {name: 'thirt', price: 200, qt: 2},
    {name: 'show', price: 100, qt: 3},
    {name: 'shirt', price: 200, qt: 4},
]
function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        // console.log(product);
        const productTotal = product.price * product.qt
        sum = sum + productTotal;
    }
    return sum;
}
const totalPrice = totalCost(shopingCart);
console.log(totalPrice);
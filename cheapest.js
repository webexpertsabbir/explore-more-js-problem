const phones = [
    {name: 'Samsung', Camera: '48mp', Storag: '120gb', price: 20000},
    {name: 'Vivo', Camera: '58mp', Storag: '140gb', price: 30000},
    {name: 'Redmi', Camera: '1008mp', Storag: '420gb', price: 10000},
    {name: 'itel', Camera: '48mp', Storag: '620gb', price: 1000},
];

function cheapestPrice(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price > cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
    
}
const cheapestPhone = cheapestPrice(phones);
console.log(cheapestPhone);

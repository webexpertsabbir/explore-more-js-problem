function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        console.log('pleace Enter your valid number')
    }
    return num1 + num2;
}
const number = add(30, '40');
console.log(number);
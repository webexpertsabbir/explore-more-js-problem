// discout

function tiketPrice(tiketQt){
    const first100Rate = 100;
    const second100Rate = 90;
    const restTiketRate = 70;
    if(tiketQt <= 100){
        const price = tiketQt *first100Rate;
        return price;
    }
    else if(tiketQt <= 200){
        const first100Price = 100 * first100Rate;
        const restTiketQt = tiketQt - 100;
        const restTiketPrice = restTiketQt * second100Rate;
        const totalPrice = first100Rate + restTiketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTiketQt = tiketQt - 200;
        const restTiketPrice = restTiketQt * restTiketRate 
        const totalCost = first100Price + second100Price + restTiketPrice;
        return totalCost;
    }

}
const price = tiketPrice(200);
console.log(price);

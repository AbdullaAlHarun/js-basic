const price = 2000;

if (price >= 5000) {
    //10% discounte
    const discountPrice = price * 10 / 100;
    const pyaPrice = price - discountPrice;
    console.log(pyaPrice);
} else if (price > 2500){
    //5% discount
    const discountPrice = price * 5 / 100;
    const pyaPrice = price - discountPrice;
    console.log(pyaPrice);
} else {
    console.log(price)
}
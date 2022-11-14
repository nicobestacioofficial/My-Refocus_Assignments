function computeTip(totalBill) {
    // let say that the currency I used is ₱
    let mealCost = 200;

    //Formula to get the decimal value.
    let convertedPercent = 10 / 100; 

    let totalTip = mealCost * convertedPercent
    return totalTip;
}

console.log("Hello your tip for today is ₱" + computeTip(200))
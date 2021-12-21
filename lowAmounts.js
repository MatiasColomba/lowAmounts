let amounts = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000]
let sumLowAmounts = 0
function lowAmounts(){
    for(let i = 0; i<amounts.length; i++){
        if(amounts[i]>=0 && amounts[i]<=1000){
            sumLowAmounts = sumLowAmounts + amounts[i]
        }
    }
    return sumLowAmounts
}
console.log(lowAmounts())
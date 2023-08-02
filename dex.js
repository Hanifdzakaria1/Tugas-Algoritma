// console.log(`kamu menghabiskan ${jam[0]} `)
let jam = [2,2,3,3,1,4,5];

let totjamlebih = 0
let totjamkurang = 0
for (let i=0; i< jam.length; i++) {
    totjamlebih += jam[i]
    if (jam[i]> 2 ) {
        totjamkurang++
    } 
}

console.log('total jam yang lebih :'+ totjamlebih ,'jam')
console.log('total hari yang kurang  :'+ totjamkurang ,'hari')

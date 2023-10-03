// Code your solutions in this file
function writeCards(array, eventName) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    } 
    return newArray; 
}

function countDown(n) {
    console.log(n);
    while(n > 0) {
        n--;
        console.log(n);
    }
}
console.log(countDown(10));
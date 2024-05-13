const listNumber =[]

for (let i = 0; i < 6; i++){
    const numberEl =parseInt(prompt('Type a Number'), 10);

    if(numberEl % 2 === 0)
        listNumber.push(numberEl)
} 
console.log(listNumber)
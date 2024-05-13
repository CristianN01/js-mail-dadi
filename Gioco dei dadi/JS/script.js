const myRandomNb = parseInt(Math.round(Math.random()* 6));
const randomComputerNb = parseInt(Math.round(Math.random()* 6));

if(myRandomNb > randomComputerNb){
    console.log('HAI VINTO')
} else {
    console.log('HAI PERSO, RITENTA')
}

console.log('Il tuo numero :' + myRandomNb + ' ' + 'Il numero del computer:' + randomComputerNb)
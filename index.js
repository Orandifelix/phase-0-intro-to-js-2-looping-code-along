// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy Birthday to me!.`)
      // debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const names = [ "Guadalupe", "Ollie", "Aki" ];
const messages = [ ];
function writeCards(names,eventname) {
    for (let counter = 0;  counter < names.length; counter++) {
        console.log (messages.push(`Thank you, ${names[counter]}, for the wonderful surprise gift!`))
    //   debugger;
    }
    return messages
}

function countDown() {
    let number = 10;
    while(number>-1){
    
      console.log(number);
      number=number-1;

    }
}
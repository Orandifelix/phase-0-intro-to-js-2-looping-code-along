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




function writeCards(names, eventName) {
  const messages = [];
  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    messages.push(message);
  }
  return messages;
}
const names = ["Guadalupe", "Ollie", "Aki"];
const messages = writeCards(names, "surprise" );
console.log(messages);


// WHILE LOOP
// function writeCards(names, eventName) {
//   i = 0;
//   while (i < names.length) {
//     const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
//     messages.push(message);
//     i++;

//   }
//   return messages;
// }

// const names = ["Guadalupe", "Ollie", "Aki"];
// const messages = writeCards(names, "surprise" );
// console.log(messages);





function countDown() {
    let number = 10;
    while(number>-1){
    
      console.log(number);
      number=number-1;

    }
}



// FOR LOOP 
// function countDown(){
//   for(let number = 10; number > -1; number--){
//     console.log(number);
// }
// }
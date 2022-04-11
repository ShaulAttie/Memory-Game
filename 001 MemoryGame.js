

// function shuffle(){
//     console.log(shuffleCards);
//     for(i of cards){

//     }
// }
//String.fromCharCode() 65 ->90
// let numPairs = 6; // usar range 6 ate 25
// let cards =[];
// for (i=0; i<numPairs ;i++){
//     cards[i] = String.fromCharCode(Math.floor(Math.random()*((65+numPairs)-65)+65))
// }
// console.log(cards);



// To get a deck of cards with 2 cards of each type according to the num of pairs the user wanto to play
let numPairs = 25; // usar range 6 ate 25
let cards = [''];
for (i = 0; i < numPairs * 2; i++) {
    let card = String.fromCharCode(Math.floor(Math.random() * ((65 + numPairs) - 65) + 65)) // random ABC according to num of pairs
    let count = 0;          // counter for checking double cards
    for (j of cards) {      //checking the deck
        if (j.search(card) !== -1 && count < 2) {
            count++
        }
    }
    (count < 2 ? cards[i] = card : i--) // adding a new card. in case os 2 of a kind the index is redused and another letter will enter instead
}
console.log(cards);

// // Generate the alphabet using Array.from making use of it being ordered as a sequence
// range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// // ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


//
// for (i=0; i<numCards; i++){
// let cards = ["A","B","C","D","E","F"]
//     result = cards[Math.floor(Math.random()*cards.length)]

// }

// debugger
let board = document.getElementById('game-table')
let elemA
for (i in cards) {
    if (i % 10 == 0) {      //add a <div> every x cards, board child
        elemA = document.createElement('div')  // create a div element
        elemA.className = ("card")             // create a card class on div element  
        board.appendChild(elemA)               // connect the element to his father board (div)
    }
    let elem01 = document.createElement('div')  // create a div element
    elem01.innerText = (cards[i])               // add a inner text with cards game
    elem01.className = ("card00")
    elemA.appendChild(elem01)                   // coonect to his father div 
    console.log(elemA);
}



    // let elemA = document.createElement('div')
    // elemA.className = ("card")
    // board.appendChild(elemA)
    // for (i=0; i < 4; i++) {
    //     let elem01 = document.createElement('div')
    //     elem01.innerText = (cards[i])
    //     // elem01.className = ("card")
    //     elem.appendChild(elem01)
    //     console.log(elem);
    // }
    // let elemB = document.createElement('div')
    // elemB.className = ("card")
    // board.appendChild(elemB)
    // if (i >= 4) {
    //     let elem02 = document.createElement('div')
    //     elem02.innerText = (cards[i])
    //     elem02.className = ("card02")

    //     board.appendChild(elem02)

    //     console.log(elem02);
    // }
// }

// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }
  
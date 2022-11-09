let deck = []
let ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
let suits = ['Hearts','Diamonds','Clubs','Spades']
for(let suit of suits){
    for (let rank of ranks) {
    deck.push({suit: suit , rank: rank})
}  
}
console.log(deck)


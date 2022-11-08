const numCards = 52
let deckOfCards = []
let r = 1


for (let i = 1; i <= numCards; i++) {
    let rankOfCard
    let suitOfCard
    

    if (r == 1) {
        rankOfCard = 'Ace'
    } else if (r == 11) {
        rankOfCard = 'Jack'
    } else if (r == 12) {
        rankOfCard = 'Queen'
    } else if (r == 13) {
        rankOfCard = 'King'
    } else (
        rankOfCard = r
    )




    if (i <= (numCards / 4)) {
        suitOfCard = 'hearts'
    } else if (i <= ((numCards / 4)) * 2) {
        suitOfCard = 'Diamonds'
    } else if (i <= ((numCards / 4)) * 3) {
        suitOfCard = 'Clubs'
    } else if(i <= (numCards)){
        suitOfCard = 'Spades'
    }
    deckOfCards.push({ rank: rankOfCard, suit: suitOfCard })
    
    r++
    if (i == (numCards/4) || i == (numCards / 4)*2 || i == ((numCards / 4)) * 3 || i == numCards ){
        r = 1
        }
}


console.log(deckOfCards)

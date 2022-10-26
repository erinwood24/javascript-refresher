


writeCards('hearts')
writeCards('Diamonds')
writeCards('Clubs')
writeCards('Spades')

function writeCards(suit){
let rank
    for(let i=1; i<=13; i++){
if(i==1){
    rank='Ace'
}else if(i==11){
    rank='Jack'
}else if(i==12){
    rank='Queen'
}else if(i==13){
    rank='King'
}else(
    rank=i
)

console.log(rank+' of '+ suit)
}
}
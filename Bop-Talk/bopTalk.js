let myString = 'This is my bobtalk game. I hope you enjoy!'
let consonant =['p','b','c','d','f','g','h','j','k','l','m','n','q','r','s','t','v','w','x','y','z']


myString = myString.toLowerCase()
console.log(myString)


for(let i = 0; i < consonant.length; i++){
    myString = myString.replaceAll( consonant[i], ' ' + consonant[i] + 'op ')
}


console.log(myString)

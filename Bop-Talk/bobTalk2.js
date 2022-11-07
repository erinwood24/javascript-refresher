let = vowels = 'aeiou '

let mySent = 'thank god'

let bobTalk = ''
for (let i = 0; i < mySent.length; i++){
    let letter = mySent[i]
    if (vowels.includes(letter) ){
        bobTalk = bobTalk + letter + ' '
    }else{
        bobTalk = bobTalk + letter + 'op '
    }
}

console.log(bobTalk)
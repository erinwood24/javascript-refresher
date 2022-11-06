let headCount = 0
let allHeadCounts = []
const numFlips = 100
for (let s = 1; s <= 100; s++) {
    headCount = 0

    for (let i = 0; i <= numFlips; i++) {
        let x = Math.floor((Math.random() * 2) + 1);

        if (x == 1) {
            // console.log('Heads')
            headCount++
        }//  else {
        //     // console.log('Tails')
        // }

    }
    allHeadCounts.push(headCount)
    console.log('Out of ' + numFlips + ' flips, you got ' + headCount + ' heads.')

}
console.log(allHeadCounts)
console.log('Max number of heads in ' + numFlips + ' was ' + Math.max(...allHeadCounts))
console.log('Max number of heads in ' + numFlips + ' was ' + Math.min(...allHeadCounts))
findingAverageOfArray(allHeadCounts)


function findingAverageOfArray(array) {
    let nums = 0
    for (let i = 0; i < array.length; i++) {
        nums = nums + array[i]
    }
    let averageOfArray = nums / array.length
    console.log('Average number of Heads in ' + numFlips + ' was about ' + averageOfArray)
}
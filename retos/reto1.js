const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

function prepareGifts(gifts) {
    const giftFiltered = []
    for (let i = 0; i < gifts.length; i++) {
        if (!giftFiltered.includes(gifts[i])) {
            giftFiltered.push(gifts[i])
        }
    }
    giftFiltered.sort((a, b) => a - b)
    return giftFiltered
}
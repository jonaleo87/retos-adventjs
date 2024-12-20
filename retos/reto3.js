
const inventory = [
    { name: 'doll', quantity: 5, category: 'toys' },
    { name: 'car', quantity: 3, category: 'toys' },
    { name: 'ball', quantity: 2, category: 'sports' },
    { name: 'car', quantity: 2, category: 'toys' },
    { name: 'racket', quantity: 4, category: 'sports' }
]

const inventory2 = [
    { name: 'book', quantity: 10, category: 'education' },
    { name: 'book', quantity: 5, category: 'education' },
    { name: 'paint', quantity: 3, category: 'art' }
]

function organizeInventory(inventory) {
    return inventory.reduce((organized, item) => {
        const { name, quantity, category } = item

        if (!organized[category]) {
            organized[category] = {};
        }

        if (organized[category][name]) {
            organized[category][name] += quantity;
        } else {
            organized[category][name] = quantity
        }
        return organized;
    }, {});
}



console.log(organizeInventory(inventory))
console.log(organizeInventory(inventory2))

// console.log("Lista 1:" + '\n' + { list1 })
// console.log("Lista 2:" + '\n' + organizeInventory(inventory2))

// Expected result:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

//   const inventory2 = [
//     { name: 'book', quantity: 10, category: 'education' },
//     { name: 'book', quantity: 5, category: 'education' },
//     { name: 'paint', quantity: 3, category: 'art' }
// ]

// organizeInventory(inventory2)

// Expected result:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }

// )

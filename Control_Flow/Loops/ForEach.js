const coding = ["Js", "JAva", "Python", "Cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach(  (item, index, arr) => {
//    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "Cpp"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach( (item) => {
    // console.log(item.languageName);
})
// ForEach Loop not return the any value

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

// console.log(values);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let newNums = myNum.filter( (num) => {
//    return num > 5
// })

// const newNums = []
// myNum.forEach ( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1990, 
    edition: 2002},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 
    1995, edition: 2004},
    {title: 'Book Three', genre: 'History', publish: 1999, 
    edition: 2006},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 2000, 
    edition: 2000},
    {title: 'Book Five', genre: 'History', publish: 2010, 
    edition: 2013},
    {title: 'Book Six', genre: 'Science', publish: 2015,
     edition: 2010},
];

// let userBooks = books.filter( (Bk) => Bk.genre === 'History' )

// userBooks = books.filter( (Bk) => {
//     return Bk.publish >= 2000 && Bk.genre === "History"
// })
// console.log(userBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8,]

// const newNums = myNumbers.map( (num) => num + 10)
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 40)

// console.log(newNums);

//  ********** Reduce **********

const myNums = [1, 2, 3, ]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)
 
const myTotal = myNums.reduce((acc, curr) => acc+curr, 0)


console.log(myTotal);

const shoppingCard = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "Py course",
        price: 12999
    },
    {
        itemName: "Mo. course",
        price: 9999
    },
]

const price = shoppingCard.reduce((acc, item) => acc + item.price, 0)

console.log(price);
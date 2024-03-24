// For of

const arr = [1, 2, 3, 4, 5, 6]
for (const i of arr) {
    // console.log(i);
}


const greeting = "Hello World!"

for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('US', "United State of America")
map.set('FR', "France")
map.set('DU', "Dubai")
// console.log(map);

for (const [key , value]of map) {
    // console.log(key, ':-', value);
}

const myobje = {
    'Game1': 'Free fire',
    'Game2': 'Spiderman'
}

// for (const [key, value] of myobje) {
//     console.log(key, ':-', value);
// }


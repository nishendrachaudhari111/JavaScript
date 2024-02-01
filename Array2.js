const marvel_heros = ["thor", "Iron man", "Spider man"]
const dc_heros = ["Super man", "Flash", "Bat man"]


// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 3, 7, [4, 8]]]

const real_onther_array = another_array.flat(Infinity)
console.log(real_onther_array);


console.log(Array.isArray("Nishendar"))
console.log(Array.from("Nishendar"))
console.log(Array.from({name: "Nishendar"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 400
let score5 = 500

console.log(Array.of(score1, score2, score3,score5));
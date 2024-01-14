const name = "Nishendar-nc"
const repoCount =50

//console.log(name + repoCount + " Value");

console.log('Hello My name is ${Nishendar} and my repo Count is ${repoCount}');

const gameName = new String('Nishendar-nc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));


const newtring = gameName.substring(0, 5)
console.log(newtring);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newtringOne = "   Nishendar   "
console.log(newtringOne);
console.log(newtringOne.trim());

const url = "https://hitesh.com/hitesh%20chaudhary"

url.replace('%20', '-')

console.log(url.replace('%20', '-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'));
const userEmail = []

if (userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy values

// false, 0 , -0, BigInt 0n, "", null, undefined, NaN

//Truthy values "0", 'False', " ", [], {}, function(){} => this is a empty Function

// if (userEmail.length === 0) {
//     console.log("Array is Empty");
// }
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): Null Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20


console.log(val1);

// Tarniary Operator
// condition ? true : false

const iceTeaprice = 1000
iceTeaprice <= 800 ? console.log("less than 800") : console.log("more than 800");



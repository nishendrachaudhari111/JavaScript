// if
// const isUserloggedIn = true
// const temperature = 41

// if(temperature === 40){
//     console.log("less than 50");
// }else{
// console.log("temperature is greater than 50");
// }

// const score = 200

// if (score > 100) {
//    let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// const balance = 1000
// if (balance > 500) console.log("test"); // This is a implicit mathod

// if (balance < 500) {
//     console.log("less than");
// } else if (balance < 700) {
//     console.log("less than 700");
// } else if (balance < 900) {
//     console.log("less than 700");
// } else {
//     console.log("less than 1200");
// }

const isUserloggedIn = true
const debitCard = true
const loggedINFromGoogle = false
const loggedInFromEmail = true

if (isUserloggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}
if (loggedINFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
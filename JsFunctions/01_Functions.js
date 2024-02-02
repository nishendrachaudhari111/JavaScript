

function sayMyName(){
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("N");
    console.log("D");
    console.log("R");
    console.log("A");
}

// sayMyName()

// function addTwonumbers(number1, number2){
//     console.log(number1 + number2);
// }
function addTwonumbers(number1, number2){
//    let result = number1 + number2
//    return result
return number1 + number2
}

const result = addTwonumbers(10 , 3)

// console.log("Result", result);

function loginUserMassage(username = "Ram"){
    if(!username){
       console.log("Please enter the username");
       return
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("Abhay"))
// console.log(loginUserMassage("Shiva"))

function calculateCartPrice(val1, val2, ...num1){
   return num1
     
}

// console.log(calculateCartPrice(200, 400, 100, 1000))

const user = {
    username: "Preeti",
    prices: 199
}

function handleObject(anyObject){
   console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Ram",
    price: 1000
})

const myNewArray = [100, 2000, 1000, 400]

function returnSecondValue(getArray){
    return getArray[2]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 2000, 1000, 400]));


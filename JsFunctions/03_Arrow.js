const user = {
    username: "Nishendra",
    price: 999,

    welcomeMassage: function(){
       console.log(`${this.username}, welcome to website`); 
    //    console.log(this);
    }
    
}

// user.welcomeMassage()
// user.username = "Ram"
// user.welcomeMassage()

// console.log(this);

// function chai(){
//     // let username = "Shiva"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai = () => { 
    let username = "Hitesh"
    console.log(this);
}


// chai()

// const addTwo = (Num1, Num2) => {
//     return Num1 + Num2
// }

// const addTwo = (Num1, Num2) => Num1 + Num2  // This is a Emplesit mathod
// const addTwo = (Num1, Num2) => (Num1 + Num2 ) 

const addTwo = (Num1, Num2) =>( {username: "Hitesh"})

console.log(addTwo(2, 4))
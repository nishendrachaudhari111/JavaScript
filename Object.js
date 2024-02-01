// singleton
//object create


// object literals
const mySym = Symbol("key1")


const JsUser = {
    name: "Nishendra",
    "Full name": "Abhay Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Ayodya",
    email: "Nishendra0012gmail.in",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "nishendra@chatgpt.in"
//Object.freeze(JsUser)
JsUser.email = "shivaChatgpt@out.in"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
// Stack (Primitive), Heap (Non-Primitive)

let myDataBaseName = "Awadhbakery"

let anothername = myDataBaseName
anothername = "Vision"

console.log(anothername);
console.log(myDataBaseName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userOne

usertwo.email = "nc@google.com"

console.log(userOne);
console.log(usertwo);
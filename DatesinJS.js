// Dates
let myDate = new Date()
//let myCreatedDate = new Date(2024, 0, 14)
//let myCreatedDate = new Date(2024, 0, 14, 5, 3)
//let myCreatedDate = new Date("2024-01-14")
let myCreatedDate = new Date("15-01-2024")


// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})


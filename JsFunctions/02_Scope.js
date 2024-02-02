// var c = 300
let a = 300

if(true){
    let  a = 10
    const b = 20 
    // console.log("INNER: ", a);
}



// console.log(a);
// console.log(b);
// console.log(a);

// Nested Scope
function one(){
    const username = "Shivani"

    function two(){
        const website = "YouTube"
        console.log(username);
    }
    // console.log(website);
   
    two()
}

// one()

if(true){
    const username = "Sabita"
    if(username === "Sabita"){
     const website = "YouTube"
    //  console.log(username + website);   
    }
    // console.log(website);

}
// console.log(username);


// ***************** Interesting *******************

console.log(addone(4))
function addone(num){
    return num + 1
}


addtwo(4)
const addtwo = function(num){
    return + 2
}


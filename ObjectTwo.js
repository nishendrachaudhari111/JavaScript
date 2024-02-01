const tinderUser = new Object() // This is a Singleton object
//const tinderUser = {} // This is a not singleton object

tinderUser.id = "123Abc"
tinderUser.name = "Jhon"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const ragularUser = {
    email: "jhon@outlok.in",
    fullname:{
        userfullname:{
            firstName: "Abhay",
            lastName: "Chaudhary"
        }
    }
}

// console.log(ragularUser.fullname.userfullname);

const obj1 = {1: "A", 2: "c"}
const obj2 = {3: "d", 4: "B"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
      id: 1,
      email: "asc123@out.in"
    },
    {
      id: 2,
      email: "asc123@out.in"
    },
    {
      id: 3,
      email: "asc123@out.in"
    },
    {
      id: 4,
      email: "asc123@out.in"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
  coursename: "JavaScript",
  price: "999",
  courseInstructor: "Hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// {
//   "name": "Abhay",
//   "coursename": "javascript",
//   "price": "free"
// }

[
  {},
  {},
  {}
]
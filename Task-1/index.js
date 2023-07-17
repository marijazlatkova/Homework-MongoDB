//* use users - pravime nova databaza users

//* kreirame nova kolekcija vo taa databaza
db.createCollection("students")

//* stavame dokumenti vo taa kolekcija so insertMany()
db.students.insertMany([{
  name: "Duke Doe",
  fullTime: true,
  gpa: 4,
  age: 18,
  course: "C4"
},
{
  name: "John Doe",
  fullTime: true,
  gpa: 3,
  age: 23,
  course: "C1"
},
{
  name: "Mike Doe",
  fullTime: true,
  gpa: 2.5,
  age: 18,
  course: "C3"
},
{
  name: "Jane Doe",
  fullTime: true,
  gpa: 4.2,
  age: 17,
  course: "C2"
},
{
  name: "Danny Doe",
  fullTime: false,
  gpa: 4.7,
  age: 18,
  course: "C3"
},
{
  name: "Rick Doe",
  fullTime: true,
  gpa: 3.5,
  age: 23,
  course: "C2"
},
{
  name: "Jim Doe",
  fullTime: false,
  gpa: 3.5,
  age: 18,
  course: "C3"
},

{
  name: "Ana Doe",
  fullTime: false,
  gpa: 2.9,
  age: 18,
  course: "C3"
},
{
  name: "Morty Doe",
  fullTime: false,
  gpa: 2,
  age: 30,
  course: "C3"
},
{
  name: "Lenny Doe",
  fullTime: true,
  gpa: 3,
  age: 18,
  course: "C2"
},
{
  name: "Jenny Doe",
  fullTime: true,
  gpa: 4.7,
  age: 21,
  course: "C4"
},
{
  name: "Lana Doe",
  fullTime: true,
  gpa: 2.2,
  age: 18,
  course: "C1"
}])

//! Task - 1
//? 1. find all (cars, users, students etc...) and display them on screen
db.students.find()

//? 2. sort them by age ascending, then decending
//* ascending order
db.students.find().sort({ age: 1 })

//* descending order
db.students.find().sort({ age: -1 })

//? 3. find user with a particular name
db.students.find({ name: "Jane Doe" })

//? 4. find all users older than 20 years
db.students.find({ age: {$gt: 20} })

//? 5. find all users younger than 18 years
db.students.find({age: {$lt: 18} })

//? 6. find 2 users aged 18 years - create NEW 5 students with age 18
db.students.find({ age: 18 }).limit(2)

//? - alternative - do it with fullTime
db.students.find({ fullTime: true }).limit(2)
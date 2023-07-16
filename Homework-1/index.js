//? 1. Make a new DB - books, students, cars
//* use bands

//? 2. Make a collection
db.createCollection("myRockBands")
//* show dbs

//? 3. Make 5 documents
//! - insertOne() x 2
db.myRockBands.insertOne({
  name: "The Rolling Stones",
  formed: 1962,
  genre: "Rock",
  members: ["Mick Jagger", "Keith Richards", "Charlie Watts", "Ronnie Wood"],
  albums: ["Let it Bleed", "Sticky Fingers", "Some Girls"]
})

db.myRockBands.insertOne({
  name: "Led Zeppelin",
  formed: 1968,
  genre: "Rock",
  members: ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham"],
  albums: ["Led Zeppelin IV", "Physical Graffiti", "Houses of the Holy"]
})

//! - insertMany({}, {}, {})
db.myRockBands.insertMany([
  {
    name: "AC/DC",
    formed: 1973,
    genre: "Rock",
    members: ["Angus Young", "Brian Johnson", "Cliff Williams", "Phil Rudd"],
    albums: ["Back in Black", "Highway to Hell", "Let There Be Rock"]
  },
  {
    name: "Pink Floyd",
    formed: 1965,
    genre: "Progressive Rock",
    members: ["David Gilmour", "Roger Waters", "Richard Wright", "Nick Mason"],
    albums: ["The Dark Side of the Moon", "Wish You Were Here", "The Wall"]
  },
  {
    name: "Queen",
    formed: 1970,
    genre: "Rock",
    members: ["Freddie Mercury", "Brian May", "John Deacon", "Roger Taylor"],
    albums: ["A Night at the Opera", "News of the World", "Sheer Heart Attack"]
  }
])

db.myRockBands.insertMany([
  {
    name: "The Beatles",
    formed: 1960,
    genre: "Rock",
    members: ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"],
    albums: ["Abbey Road", "Rubbler Soul", "Revolver"]
  },
  {
    name: "Black Sabbath",
    formed: 1968,
    genre: "Heavy Metal",
    members: ["Ozzy Osbourne", "Tony Iommi", "Geezer Butler", "Bill Ward"],
    albums: ["Paranoid", "Black Sabbath", "Master of Reality"]
  },
  {
    name: "Nirvana",
    formed: 1987,
    genre: "Grunge",
    members: ["Kurt Cobain", "Krist Novoselic", "Dave Grohl"],
    albums: ["Nevermind", "In Utero", "Bleach"]
  }
])

db.myRockBands.insertMany([
  {
    name: "Metallica",
    formed: 1981,
    genre: "Heavy Metal",
    members: ["James Hetfield", "Kirk Hammett", "Robert Trujillo", "Lars Ulrich"],
    albums: ["Master of Puppets", "Ride the Lightning", "Metallica"]
  },
  {
    name: "Deep Purple",
    formed: 1968,
    genre: "Hard Rock",
    members: ["Ian Gillan", "Ritchie Blackmore", "Roger Glover", "Ian Paice"],
    albums: ["Machine Head", "Burn", "Perfect Strangers"]
  },
  {
    name: "The Ramones",
    formed: 1974,
    genre: "Punk Rock",
    members: ["Joey Ramone", "Johnny Ramone", "Tommy Ramone", "Marky Ramone"],
    albums: ["Ramones", "Mondo Bizarro", "Rocket to Russia"]
  }
])

//? 4. Print documents on screen
//* find() se koristi za da gi izvlece site dokumenti vo kolekcijata
db.myRockBands.find()

//? *Bonus - sort documents by "name, author, carModel" in alphabetical order
db.myRockBands.find().sort({ name: 1, members: 1, genre: 1 })

//* vrednosta 1 pretstavuva rastecki redosled (ascending order)
//* vrednosta -1 pretstavuva opagjacki redosled (descending order)
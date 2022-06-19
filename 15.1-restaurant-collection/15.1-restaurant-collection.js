//? 1. mongosh

//? 2. use findMyRestaurant

//? 3.
db.restaurants.insertMany([
  {
    name: "lasagnaCity",
    address: { city: "haifa", street: "carmel", coordinates: [56, 442, 87.5] },
    cuisine: "italian food",
    kosher: false,
    reviews: [
      { date: "14-5-2021", score: 7 },
      { date: "27-11-2021", score: 9.2 },
      { date: "19-7-2022", score: 8 }
    ]
  },
  {
    name: "sushiBar",
    address: { city: "tel aviv", street: "yafo", coordinates: [42, 42, 97.5] },
    cuisine: "japanese food",
    kosher: false,
    reviews: [
      { date: "19-8-2021", score: 5 },
      { date: "2-1-2021", score: 7.4 },
      { date: "19-9-2021", score: 8.8 }
    ]
  },
  {
    name: "pastas",
    address: { city: "haifa", street: "namal", coordinates: [77, 83, 417] },
    cuisine: "italian food",
    kosher: true,
    reviews: [
      { date: "22-1-2021", score: 9 },
      { date: "13-4-2022", score: 7.6 },
      { date: "22-12-2022", score: 2 }
    ]
  },
  {
    name: "tacosShacos",
    address: { city: "eilat", street: "shemesh", coordinates: [59, 98, 131] },
    cuisine: "fast food",
    kosher: true,
    reviews: [
      { date: "27-2-2021", score: 6 },
      { date: "8-10-2021", score: 7.3 },
      { date: "16-10-2021", score: 9.5 }
    ]
  },
  {
    name: "shnitzel house",
    address: {
      city: "eilat",
      street: "vradim",
      coordinates: [22, 92, 555]
    },
    cuisine: "fast food",
    kosher: true,
    reviews: [
      { date: "10-8-2020", score: 6.9 },
      { date: "18-3-2021", score: 8.2 },
      { date: "13-11-2021", score: 7.7 },
    ]
  }
])

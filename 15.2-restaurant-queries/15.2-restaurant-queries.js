//! 1_)
//? 1.1 db.restaurants.find()

//? 1.2 db.restaurants.find({cuisine: "italian food"})

//? 1.3 db.restaurants.find({kosher: true})

//? 1.4 db.restaurants.find({'address.city': 'haifa'})

//? 1.5 db.restaurants.find({address: { city: "tel aviv", street: "yafo", coordinates: [42, 42, 97.5] }})

//? 1.6 db.restaurants.find({'address.coordinates': [77, 83, 417]})

//? 1.7 db.restaurants.find().sort({name: 1})

//? 1.8 db.restaurants.find().sort({'address.city': 1})

//? 1.9 db.restaurants.update({name: 'pastas'}, {$set:{name: 'megaPasta'}})

//? 1.10 db.restaurants.updateOne({name: 'tacosShacos'}, {$push:{reviews: {date: '11-2-2022', score: 4} } })

//? 1.11 db.restaurants.updateMany({}, { $set: {kosher: true} })

//? 1.12 db.restaurants.remove({name: 'sushiBar'})

//? 1.13 db.restaurants.remove({})


//! 2_)
//? 2.1 db.restaurants.find().forEach(res => print(`restaurant name is: ${res.name}`))

//? 2.3 db.restaurants.find().forEach(res => print(`restaurant city is: ${res.address.city}`))

//? 2.2 db.restaurants.find().forEach(res => print(`restaurant coordinates are: [${res.address.coordinates}]`))


//! 3_)
//? 3.1 db.restaurants.find({ name: /^s/ })

//? 3.2 db.restaurants.find().count()

//? 3.3 db.restaurants.find({ reviews: {$elemMatch: {date: '27-11-2021'} } })


//! 4_)
//? 4.1 db.restaurants.aggregate([ { $unwind: "$reviews" }, { $group: { _id: "$name", average: { $avg: "$reviews.score" } } }])

//? 4.2 db.restaurants.aggregate([ { $match: { name: 'megaPasta' } }, { $unwind: "$reviews" }, { $group: { _id: "$name", average: { $avg: "$reviews.score" } } }])

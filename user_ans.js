use test
use shruti1
db.books.find()
db.users.find()

// and operator
db.users.find({$and:[{_id: ObjectId("65326b8aa919a7df2f47e53a")},{username:"Bret"}])

// or operator 
db.users.find({$or:[{_id: ObjectId("65326b8aa919a7df2f47e53a")},{username:"Antonette"}])

// nor
db.users.find({$nor:[{_id: ObjectId("65326b8aa919a7df2f47e53a")},{username:"Antonette"}])

// not
db.users.find({$not:[{_id: ObjectId("65326b8aa919a7df2f47e53a")},{username:"Antonette"}]})
db.users.find({username:{$not:{_id: ObjectId("65326b8aa919a7df2f47e53a")}}})
  
//  limit
db.users.aggregate([{$limit: 8}])

// currentDate
db.users.updateOne({_id:ObjectId("65326b8aa919a7df2f47e53c")},{$currentDate:{Date:true}}) 

//  inc 
 db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53d")},{$inc: {pages:10}})

// rename
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53b")},{$rename: {name:'bookTitle'}})

// set
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53e")},{$set: {price: 549}}) 

// unset
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53e")},{$unset: {pages: 30}}) 

// addToSet
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53f")},{$addToSet: {faculty:"girishsi"}})

//  pop
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53a")},{$pop:{content:1}})

// push
db.users.updateOne({_id:ObjectId("65326b8aa919a7df2f47e53e")},{$push: {name1: "Qode"}})   

// pull
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53d")},{$pull: {"author":"skill qode"}})

// limit
db.users.aggregate([{$limit: 5}])

// project
db.users.aggregate([{$skip: 4},{$limit: 4}])

db.users.aggregate([{$project:{_id:2, author:1, pages:1 }}])
 db.books.aggregate([{$sort: {"id": -1}}])
// db.books.aggregate([
//     {$match: {pages: {$gt: 209}}},
//     {$sort: {"pages": 1}}
//     ])
// db.books.aggregate([
//     {$addFields: {"test": 123}}
//     ])
// db.books.aggregate([
//     {$count: "total documents"}
//     ])


 
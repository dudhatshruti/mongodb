
//  equal
db.books.find({postId:{$eq:2}})

// not equal

db.books.find({postId:{$ne:2}})

// greater than

db.books.find({postId:{$gt:4}})

// greater than equal 

db.books.find({postId:{$gte:3}})

// less than

db.books.find({postId:{$lt:4}})

// less than equal to

db.books.find({postId:{$lte:3}})

// include value

db.books .find({postId:{$in:[2,3,4]}})

// not include 

db.books .find({postId:{$nin:[2,3,4]}})




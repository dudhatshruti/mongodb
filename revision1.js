// <!-- ==> create database
// ----------------------- -->

use shruti;

// <!-- ===> create collection
// ------------------------ -->

db.createCollection('name')

// <!-- ===> show list of all collection
// -------------------------------- -->

show collections


// <!-- ===> insert one data
// --------------------- -->

db.books.insertOne({
    title: "Javascript Complete Refernce Book",
    pages: 800,
    price: 199,
    auther: "SkillQode",
    content:['index','introduction'],
    test:{
        ch: 1
    }
})

// <!-- ===>  insert many data
// ------------------------ -->

db.books.insertMany(
    {
        title: "MySQL Book",
        pages: 500,
        price: 249,
        auther: "John Peter" 
    },
    {
        title: "MongoDB Database Book",
        pages: 890,
        price: 249,
        auther: "Bhavik Cobra"
    },
    {
        title: "C Programming Book",
        pages: 190,
        price: 649,
        auther: "SkillQode"
    },
    {
        title: "C++ Programming Book",
        pages: 490,
        price: 549,
        auther: "SkillQode"
    }
)


// <!-- ===> show insert data
// --------------------- -->

db.books.find()

// <!-- ===> show specific data
// ----------------------- -->

db.books.find({auther:"skillQode"})


// <!-- ===> update data
// ----------------- -->

db.books.updateMany({title:"MySQL Book"},{$set:{title:"java book"}})

// <!-- ===> replace one document data
// ------------------ -->

db.books.replaceOne({auther:"bhavik cobra"},{auther:"johan peter"},
{upsert : true})


// <!-- ===> delete one document data
// ------------------------------ -->

db.books.deleteOne({auther:"john peter"})


// <!-- ===> delete many document data
// ------------------------------ -->

db.books.deleteMany({auther:"john peter"})


// <!-- ===> remove all document data
// ------------------------------ -->

db.books.remove({});


// <!-- ===> remove specific document data
// ------------------------------ -->

db.books.remove({auther:"johan peter"});


// <!-- ===> skip() data
// --------------- -->

db.books.find().skip(1);


// <!-- ===> limit()   specify the maximum number of result to be retuned
// ------------------------------------------------------------------ -->

db.books.find().limit(2)


// <!-- ===> count()  return the number of document
// -------------------------------------------- -->

db.books.find().count()

// <!-- ===> sort() data     1 ->accending order
// -----------------        -1 ->decending order    -->

db.books.find().sort({"pages":1})
db.product.find().sort({"price":-1})

// <!-- ===> drop() collection
// ----------------------- -->

db.collection.drop()

// <!-- ===> dropDatabase()
// -------------------- -->

db.dropDatabase()


// <!-- ===> import file into database
// ================================== -->

https://wwww.mongodb.com / try / download / database.tools ->(command the db tool)
// (download above tool)

// download above tool -> open ->go mongodb database -> bin -> mongoimport.exe (copy) (after)

// go Programme file -> mongoDb -> server -> version -> bin -> (paste)


// ===> json file import in mongoDb
// ================================= 

// --> make a json file (vs code)
// --> open cmd type mongod, open cmd where json file is locate type

// mongoimport --db databaseName --collection collectionName --file fileName --json array

// <!-- example :-
// ---------- -->
// mongoimport --db books --collection taskbook --file books.json --jsonArray

// show dbs -> usebooks -> db.taskbook.find()


// <!-- ===> comparision operator
// ========================== -->

// <!-- ===> $eq  -> equal to 
// ----------------------- -->
db.books.find({postId:{$eq:2}})

// <!-- ===> $ne  -> not equal to
// ----------------------- -->
db.books.find({postId:{$ne:2}})

// <!-- ===> $gt  -> greater than
// ----------------------- -->
db.books.find({postId:{$gt:2}})

// <!-- ===> $gte  -> greater than equal
// -------------------------------- -->
db.books.find({postId:{$gte:4}})

// <!-- ===> $lt  -> less than 
// -------------------------------- -->
db.books.find({postId:{$lt:4}})

// <!-- ===> $lte  -> less than equal
// -------------------------------- -->
db.books.find({postId:{$lte:4}})

// <!-- ===> $in  -> include value
// -------------------------------- -->
db.books.find({postId:{$in:[2,3,4]}})

// <!-- ===> $nin  -> not include value
// -------------------------------- -->
db.books.find({postId:{$nin:[2,3,4]}})


// <!-- ===> logical operator
// ======================= -->

// <!-- ===> $and  ->match the condition of both clauses
// -------------------------------------------------- -->
db.users.find({$and:[{_id: ObjectId("65326b8aa919a7df2f47e53a")},{username:"Bret"}]})

// <!-- ===> $or -> match the condition of either clauses
// -------------------------------------------------- -->
db.users.find({$or:[{_id: ObjectId("65326b8aa919a7df2f47e53a")},{username:"Antonette"}]})

// <!-- ===> $nor 
// ------------- -->
db.users.find({$nor:[{_id: ObjectId("65326b8aa919a7df2f47e53a")},{username:"Antonette"}]})

// <!-- ===> $not
// ------------ -->
db.users.find({$not:[{_id: ObjectId("65326b8aa919a7df2f47e53a")},{username:"Antonette"}]})

// ===> $currentDate
// --------------------
db.users.updateOne({_id:ObjectId("65326b8aa919a7df2f47e53c")},{$currentDate:{Date:true}})

// ===> $inc
// -----------
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53d")},{$inc:{pages:10}})

// ===> $rename
// -------------
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53b")},{$rename: {name:'bookTitle'}})

// ===> $set
// ----------
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53e")},{$set: {price: 549}}) 


// ===> $unset
// ------------
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53e")},{$unset: {pages: 30}}) 


// ====> Array
// --------------

// ===> $addToSet
// ------------------
db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53f")},{$addToSet: {faculty:"girishsi"}})

// ===> $pop
// ------------

db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53a")},{$pop:{content:1}})

// ===> $pull
// --------------

db.users.updateOne({_id: ObjectId("65326b8aa919a7df2f47e53d")},{$pull: {"author":"skill qode"}})


// ===> $push
// ---------------

db.users.updateOne({_id:ObjectId("65326b8aa919a7df2f47e53e")},{$push: {name1: "Qode"}})  


// ===>limit
// -------------
db.users.aggregate([{$limit: 5}])

//  ===> project
// ----------------

db.users.aggregate([{$skip: 4},{$limit: 4}])
db.users.aggregate([{$project:{_id:2, author:1, pages:1 }}])

// ===> sort
// -----------

db.books.aggregate([{$sort: {"id": -1}}])

// ===> match with sort

db.books.aggregate([{
$match:{pages:{$gt:209}}},{$sort:{"pages":1}}])

//  ===> $addfields

db.books.aggregate([{$addFields:{"test":123}}])

// ===> $count

db.books.aggregate([{$count:"total documents"}])

// ===> group
// ===============

db.product.insertMany([
    
    { "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, totalPrice:10000, "date" : ISODate("2014-01-01T08:00:00Z") },
    { "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, totalPrice:20000, "date" : ISODate("2014-02-03T09:00:00Z") },
    { "_id" : 3, "item" : "xyz", "price" : 5,  "quantity" : 5, totalPrice:30000,  "date" : ISODate("2014-02-03T09:05:00Z") },
    { "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10,totalPrice:40000, "date" : ISODate("2014-02-15T08:00:00Z")},
    { "_id" : 5, "item" : "xyz", "price" : 5,  "quantity" : 10,totalPrice:50000,  "date" : ISODate("2014-02-15T09:05:00Z") }
])

db.product.find()

db.product.aggregate([
{
    $group: {
        _id:null,
        totalsum:{$sum:"$totalPrice"},
        item1:{$push:"$price"},
        totalavg:{$avg: "$quantity"},
        totalcount:{$count:{}},
        totalmin:{$min:"$totalPrice"},
        totalmax:{$max:"$totalPrice"},
        totalFirst:{$first: "$quantity"},
        totalLast:{$last: "$quantity"},
        author:{$push:"$item"}
    }
}
])


// ===> lookup

db.students.insertMany([
    {"sid":1,"sname":"setu","fac_name":"girish sir","marks":370,"grade":'C'},
    {"sid":2,"sname":"shruti","fac_name":"vivek sir","marks":510,"grade":'A'},
    {"sid":3,"sname":"khushal","fac_name":"keyur sir","marks":490,"grade":'B'},
    {"sid":4,"sname":"parth","fac_name":"mohit sir","marks":495,"grade":'B'},
    {"sid":5,"sname":"king cobra","fac_name":"nilesh sir","marks":520,"grade":'A'},
    {"sid":6,"sname":"smit","fac_name":"shikha medam","marks":510,"grade":'A'}]);

    db.students.find();
    
db.faculty.insertMany([
    {fac_id:11,fac_nm:"girish sir",gmail:"girishgondaliya@gmail.com",course:"Nodejs"},
    {fac_id:22,fac_nm:"shikha medam",gmail:"shikha123a@gmail.com",course:"Python"},
    {fac_id:33,fac_nm:"keyur sir",gmail:"keyur12@gmail.com",course:"cpp"},
    {fac_id:44,fac_nm:"vivek sir",gmail:"vivek@gmail.com",course:"ReactJs"},
    {fac_id:55,fac_nm:"nilesh sir",gmail:"nileshpethani@gmail.com",course:"UI/UX"},
    {fac_id:66,fac_nm:"mohit sir",gmail:"mohitttt4@gmail.com",course:"C"}])    

    db.faculty.find();

    db.students.aggregate([
        {
            $lookup : {
                from : "faculty",
                localField :"fac_name",
                foreignField : "fac_nm",
                as: "faculty"
            }
        },
        {
            $project:{"faculty._id":0,"faculty.gmail":0}
        }
    ])
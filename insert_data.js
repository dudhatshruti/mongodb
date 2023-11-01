db.books.insertOne({
    title: "c programming book",
    pages : 290,
    price: 399,
    auther:"skillQode"
})

db.books.insertMany([
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
         title: "java complete Book",
         pages: 190,
         price: 649,
         auther: "SkillQode"
     },
     {
        title: "c++ programming books",
        pages: 890,
        price: 249,
        auther: "Bhavik Cobra"
    },
])


// show collection data
 db.books.find()

// show specific data
db.books.find({auther: "skillQode"}) 

// one data show
db.books.findOne({price: 649})
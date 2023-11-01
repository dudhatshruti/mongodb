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

// update  data

db.books.updateMany({ title: "MySQL Book"},{$set :{title: "javascript Book"}})

//  replace data

db.books.replaceOne({auther:"Bhavik Cobra" },{ auther:"john doe"},{upsert : true})
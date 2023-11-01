/*
    create database
     use db_name

     create collection
     db.createColletion('name')

     show collections -> list of all collections


     db.books.insertOne({
        title: "Javascript Complete Refernce Book",
        pages: 800,
        price: 199,
        auther: "SkillQode"
     })
     
     db.books.insertOne({
        title: "Java Complete Refernce Book",
        pages: 800,
        price: 199,
        auther: "SkillQode",
        content: ['index', 'introduction of java'],
        test: {
            abc: 'XYZ'
        }
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
     ])


    //  Retrieve data

    db.books.find()
    db.books.find({auther: "SkillQode"})
    db.books.findOne({price: 549})
*/

// use shruti1 

// show collections

db.students.insertMany([
{"sid":1,"sname":"setu","fac_name":"girish sir","marks":370,"grade":'C'},
{"sid":2,"sname":"shruti","fac_name":"vivek sir","marks":510,"grade":'A'},
{"sid":3,"sname":"khushal","fac_name":"keyur sir","marks":490,"grade":'B'},
{"sid":4,"sname":"parth","fac_name":"mohit sir","marks":495,"grade":'B'},
{"sid":5,"sname":"king cobra","fac_name":"nilesh sir","marks":520,"grade":'A'},
{"sid":6,"sname":"smit","fac_name":"shikha medam","marks":510,"grade":'A'}]);
    
//  db.students.find();



// // db.faculty.insertMany([
// //     {fac_id:11,fac_nm:"girish sir",gmail:"girishgondaliya@gmail.com",course:"Nodejs"},
// //     {fac_id:22,fac_nm:"shikha medam",gmail:"shikha123a@gmail.com",course:"Python"},
// //     {fac_id:33,fac_nm:"keyur sir",gmail:"keyur12@gmail.com",course:"cpp"},
// //     {fac_id:44,fac_nm:"vivek sir",gmail:"vivek@gmail.com",course:"ReactJs"},
// //     {fac_id:55,fac_nm:"nilesh sir",gmail:"nileshpethani@gmail.com",course:"UI/UX"},
// //     {fac_id:66,fac_nm:"mohit sir",gmail:"mohitttt4@gmail.com",course:"C"}
// //     ])
    
    

// db.students.aggregate([{
//         $lookup: {
//                from: "faculty",
//                localField: "fac_name",
//                foreignField: "fac_nm",
//                as: "faculty"
//              }
//     },
//     {
//     $project: {"faculty._id":0}
//     }
//     ])
     
    
// db.faculty.find();
// db.books.find();
// db.books1.find();

// db.books1.insertMany([
//      {fac_id:11,fac_nm:"girish sir",gmail:"girishgondaliya@gmail.com",course:"Nodejs"},
//      {fac_id:22,fac_nm:"shikha medam",gmail:"shikha123a@gmail.com",course:"Nodejs"},
//      {fac_id:33,fac_nm:"girish sir",gmail:"keyur12@gmail.com",course:"cpp"},
//      {fac_id:44,fac_nm:"vivek sir",gmail:"vivek@gmail.com",course:"ReactJs"},
//      {fac_id:55,fac_nm:"girish sir",gmail:"nileshpethani@gmail.com",course:"UI/UX"},
//      {fac_id:66,fac_nm:"mohit sir",gmail:"mohitttt4@gmail.com",course:"Nodejs"}
//      ])

// db.books.aggregate([
//     {
//         $group:{
//             _id:{postId: "$postId"}
//             author:{$push:"$name"}
//         }
//     },
//     {$match:{"_id.postId":{$gte :50}}}
//     ])
    
    
//     db.books.aggregate([
//     {$match:{"_id.postId":{$gte :50}}},
//     {
//         $group:{
//             _id:{postId: "$postId"}
//             author:{$push:"$name"}
//         }
//     },
//     ])

// db.books.find()
// db.books.aggregate([
//     {
//         $group:{
//             _id:{postId: "$postId"}
//             author:{$push:"$name"}
//         }
//     },
//     {$sort:{"_id.postId":1},
//     {$limit:50},
//     {$count:"id"},
//     ])


// db.books.aggregate([
//     {
//         $group:{
//             _id:{postId: "$postId"}
//             author:{$push:"$name"}
//             avgQuantity: { $avg: "id" }
//             first:{$first: "$body"}
//             last:{$last: "$email"}
//             maxnumber:{$max: "$postId"}
//             minnumber:{$min: "$postId"}
//         },
//     }
//     ])
    
    db.product.insertMany([
    
    { "_id" : 1, "item" : "abc", "price" : 10, "quantity" : 2, totalPrice:10000, "date" : ISODate("2014-01-01T08:00:00Z") },
    { "_id" : 2, "item" : "jkl", "price" : 20, "quantity" : 1, totalPrice:20000, "date" : ISODate("2014-02-03T09:00:00Z") },
    { "_id" : 3, "item" : "xyz", "price" : 5,  "quantity" : 5, totalPrice:30000,  "date" : ISODate("2014-02-03T09:05:00Z") },
    { "_id" : 4, "item" : "abc", "price" : 10, "quantity" : 10,totalPrice:40000, "date" : ISODate("2014-02-15T08:00:00Z")},
    { "_id" : 5, "item" : "xyz", "price" : 5,  "quantity" : 10,totalPrice:50000,  "date" : ISODate("2014-02-15T09:05:00Z") }
])

// db.product.find()

// db.product.aggregate([
//     {
//         $group: {
//             _id:{item:"$item"}
            
//         }
//     }
//     ])
    
    db.product.aggregate([
    {
        $group: {
            _id:null
            totalsum:{$sum:"$totalPrice"},
            item1:{$push:"$price"},
            totalavg:{$avg: "$quantity"},
            totalcount:{$count:{}},
            totalmin:{$min:"$totalPrice"},
            totalmax:{$max:"$totalPrice"},
            totalFirst:{$first: "$quantity"},
            totalLast:{$last: "$quantity"},
         
        }
    }
    ])
   
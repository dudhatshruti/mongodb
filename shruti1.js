
1.
use ecommerce

2. 

show collections

3.

db.customers.insertOne({
    customer_id :" 10",
    first_name : "johan",
    last_name: "peter",
    email: "johan@gmail.com",
    password :"1234"
})

db.products.insertOne({
    product_id:"20",
    product_name:"t-shirt",
    product_description:"abc",
    product_price:5000,
    product_quantity:10000,
    category :"abcde"
})

db.orders.insertOne({
    order_id:"30",
    custom_id:"10",
    order_date:"2023-july-25",
    total_price:20000
})

db.order_items.insertOne({
    order_item_id:"40",
    order_id:"30",
    pro_id:"20",
    quantity:30000,
    price:50000
})

4.

db.customers.find()

5.

db.products.find()

6.

db.orders.find()

7.

db.order_items.find()

8.

db.orders.aggregate([{
    $lookup: {
           from: "customers",
           localField: "customer_id",
           foreignField: "custom_id",
           as: "customers"
         }
         {
            $project: {"customers._id":0}
         }
}])

9.

db.products.updateOne({product_quantity:10000},{$set:{product_quantity: 40000}})
   
10.

db.customers.aggregate([{
     $group:{
            _id:{customer_id: "$email"}
        },
}])
    
    
11.
db.products.sort({product_price:1})

12.

db.orders.deleteOne({order_id:"30"})




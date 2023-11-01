
//  count data
db.books.count()

// sort()

db.books.sort({pages: 1})

//  drop  collection

db.books.drop()

//  drop database

db.dropdatabase()

// remove data

db.books.remove({ title: "c programming book"})
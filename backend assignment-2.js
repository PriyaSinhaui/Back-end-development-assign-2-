//use("BCA")

//db.createcollection("students")

//db.students.insertMany([{"name":"john","section":"a"}])

//db.students.find()

//db.students.updateMany({"section":"a"},{$set:{"section":"e"}})

db.createCollection("users")
db.users.insertOne([{"name":"rohan","section":"a","phoneno":"9214589023"}])
db.users.insertMany([{"name":"ronak","section":"a","phoneno":"9214589023","name":"ranbir","section":"d","phoneno":"7890654321"},"name":"rajan","section":"a","phoneno":"6789543210"])
db.users.find()
db.users.findOne(["phoneno":"section"])

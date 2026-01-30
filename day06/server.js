const app = require("./src/app");
const mongoose = require("mongoose")

function connectToDB() {
    mongoose.connect("mongodb+srv://vipultiwari479_db_user:euduKiYkA9KedbxD@cluster0.ntqexen.mongodb.net/day06")
        .then(() => {
            console.log("Database connected successfully")
        })
}


connectToDB()

app.listen(3000, () => {

    console.log("Server is running on port 5000")

})
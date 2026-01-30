const app = require("./src/app");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

function connectToDB() {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("Database connected successfully")
        })
}


connectToDB()

app.listen(3000, () => {

    console.log("Server is running on port 5000")

})
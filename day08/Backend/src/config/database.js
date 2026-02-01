const mongoose = require("mongoose")

const connectToDB = () => {
    mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log("Database connected successfully")
        })
}

module.exports = connectToDB
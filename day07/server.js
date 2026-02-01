require("dotenv").config()
const app = require("./src/app")
const connectToDB = require("./src/config/database")


app.listen(3000, () => {
    connectToDB()
    console.log("Server is running on port 3000")

})
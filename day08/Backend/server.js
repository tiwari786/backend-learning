const app = require("./src/app")
const connectToDB = require("./src/config/database")

require("dotenv").config()


app.listen(3000, () => {
    connectToDB()
    console.log("Server is running on port 3000")
})
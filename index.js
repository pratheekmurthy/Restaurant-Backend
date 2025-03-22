const express = require('express')  
const configureDB = require('./database/db')
const router = require('./routes/restaurantRoutes')
const app = express()
const Port = process.env.PORT || 4001




configureDB()
app.use(express.json())
app.use(router)


app.listen(Port,()=>{
    console.log(" server is running on ",Port)
})
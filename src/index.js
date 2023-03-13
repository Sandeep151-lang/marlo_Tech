const express = require('express')
const app = express()
const env = require('dotenv');
const bodyParser = require('body-parser');
const userRoute = require('./routers/users')


env.config()

require('./dbConn/dbConn')

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.listen(process.env.PORT, ()=>{
    console.log(`server is running in port ${process.env.PORT}`)
})


app.use('/',userRoute)

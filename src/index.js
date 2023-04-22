const express = require('express')
const app = express()
const env = require('dotenv');
const bodyParser = require('body-parser');
const userRoute = require('./routers/users')
const courRoute = require('./routers/course')
const cors = require('cors')
const categoryRoute = require('./routers/category')


env.config()

require('./dbConn/dbConn')

const corsOptions = ["http://localhost:3000/"]
app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(process.env.PORT, (err,d)=>{
    if(err) console.log(err)
    console.log(`server is running in port ${process.env.PORT}`)
})


 app.use('/',userRoute)
 app.use('/',courRoute)
 app.use('/',categoryRoute)

app.get('/user/list',(req,res)=>{
    res.send('hello')
})

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Headers", "*");
//     res.header('Access-Control-Allow-Credentials', false);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//     next()
//   })


  module.exports = app;

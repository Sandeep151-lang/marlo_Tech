const express = require('express')
const app = express()
const env = require('dotenv');
const bodyParser = require('body-parser');
const userRoute = require('./src/routers/users')
const courRoute = require('./src/routers/course')
const cors = require('cors')
const categoryRoute = require('./src/routers/category')


env.config()

require('./src/dbConn/dbConn')

//  const corsOptions = "*"
// const corsOptions = {
    //     origin: true, //included origin as true
    //     credentials: true, //included credentials as true
    //   };
    app.use(cors({origin:"*"}))
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(bodyParser.json());



app.get('/test/list',(req,res)=>{
    res.send('hello')
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "*");
    res.header('Access-Control-Allow-Credentials', false);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next()
  })

app.use('/user',userRoute)
app.use('/course',courRoute)
app.use('/category',categoryRoute)

app.listen(process.env.PORT || 5000, (err,d)=>{
    if(err) console.log(err)
    console.log(`server is running in port ${process.env.PORT}`)
})



  module.exports = app;

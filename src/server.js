const express=require('express')
const morgan=require('morgan')

const app=express()

app.use(express.json())
app.use(morgan('dev'))

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
 
app.use(require('./routes/portfolio.routes'))
// app.use(require('./routes/users.routes'))

app.use(express.static(__dirname+'/../public'))

module.exports=app
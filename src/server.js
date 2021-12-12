//Server

const express=require('express')
const morgan=require('morgan')

const app=express()

app.use(morgan('dev'))

app.set('trusty proxy', process.env.NODE_ENV === 'production' ? 1 : 0)

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})
 
app.use(require('./routes/portfolio.routes'))

app.use(express.static(__dirname+'/../public'))

module.exports=app
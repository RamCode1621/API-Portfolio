const mongoose=require('mongoose')

const CounterSchema=new mongoose.Schema({
    views:{type:Number}
})

module.exports=mongoose.model('Globalvalues',CounterSchema)
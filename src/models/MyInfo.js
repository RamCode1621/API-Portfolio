const mongoose=require('mongoose')

const myInfoSchema=new mongoose.Schema({
    title:{type:String},
    description: {type:String},
    description2:{type:String},
    image:{type:String},
    socialMedia:{type:Array}, 
})



module.exports=mongoose.model('myInfo',myInfoSchema)
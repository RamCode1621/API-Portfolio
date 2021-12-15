const mongoose=require('mongoose')

const InfoSchema=new mongoose.Schema({
    title:{type:String},
    description: {type:String},
    description2:{type:String},
    image:{type:String},
    socialMedia:{type:Array}, 
})



module.exports=mongoose.model('MyInfo',InfoSchema)
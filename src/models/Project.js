const mongoose=require('mongoose')

const projectSchema=new mongoose.Schema({
    name:{type:String},
    description: {type:String},
    technologies:{type:Array},
    links:{type:Array}, 
    images:{type:String}
})

module.exports=mongoose.model('Projects',projectSchema)
const mongoose=require('mongoose')

const stringConection=process.env.URL_DATABASE

const settings={ 
    useNewUrlParser: true, 
    useUnifiedTopology: true  
}
 
mongoose.connect(stringConection,settings)
.then(res=>console.log("Database coneted!!!"))
.catch(error=>console.error(error))

module.exports=mongoose
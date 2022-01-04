const mongoose=require('mongoose')

const stringConection='mongodb+srv://richard:F80jk83EB7EgoMGN@cluster0.a88to.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const settings={ 
    useNewUrlParser: true, 
    useUnifiedTopology: true  
}
 
mongoose.connect(stringConection,settings)
.then(res=>console.log("Database mongodb coneted!!!"))
.catch(error=>console.error(error))

module.exports=mongoose
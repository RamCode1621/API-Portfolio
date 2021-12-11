require('dotenv').config('./')
const app=require('./src/server')
require('./src/database')

const port=process.env.PORT
 
app.listen(port,(req,res)=>{ 
    console.log(`Server on port ${port}`)
})
const mysql=require('mysql')

const mysqlConnection=mysql.createConnection({
    host:'0.0.0.0',
    port:'33060',
    user:'root', 
    password:'password',
    database:'company'
})

mysqlConnection.connect(function (error) {
    if(error){
        console.log(error)
        return
    }else{
        console.log('Database mysql coneted!!!')
    }
})

module.exports=mysqlConnection
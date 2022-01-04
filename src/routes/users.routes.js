const express=require('express')
const router=express.Router()

const mysqlConnection=require('../MySqlConfig')

router.get('/employees',(req,res)=>{
    mysqlConnection.query('SELECT * FROM employees',(error, rows,fields)=>{
        if(!error){
            console.log(res.json(rows))
        }else{
            console.log(error)
        }
    })
})

router.get('/employe/:id',(req,res)=>{
    const {id}=req.params
    mysqlConnection.query(`SELECT * FROM employees WHERE id=${id}`,(error, rows,fields)=>{
        if(!error){
            console.log(res.json(rows[0]))
        }else{
            console.log(error)
        }
    })
})

module.exports=router
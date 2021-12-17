//Routes

const express=require('express')
const route=express()
const {getProjects,getProjectDetails,getMyInfo,saveData,saveMyInfo}=require('../controllers/routes.controllers')

// const ModelProject=require('../models/Project')
// const ModelMyInfo=require('../models/MyInfo')

route.get('/',(req,res)=>{
    res.send('My API!!!!!')
})

route.get('/projects',getProjects) 
route.get('/project/:name',getProjectDetails)
route.get('/info',getMyInfo)

// router.get('/save-data',saveData)
// router.get('/save-myInfo',saveMyInfo)

module.exports=route 
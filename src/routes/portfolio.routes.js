const express=require('express')
const router=express()
const {getProjects,getProjectDetails,getMyInfo,saveData,saveMyInfo}=require('../controllers/routes.controllers')

// const ModelProject=require('../models/Project')
// const ModelMyInfo=require('../models/MyInfo')

router.get('/',(req,res)=>{
    res.redirect('/info')
}) 
router.get('/projects',getProjects) 

router.get('/project/:name',getProjectDetails)
router.get('/info',getMyInfo)

// router.get('/save-data',saveData)
// router.get('/save-myInfo',saveMyInfo)

module.exports=router   
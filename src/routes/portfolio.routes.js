const express=require('express')
const router=express.Router()
const {getProjects,getProjectDetails,getMyInfo,saveData,saveMyInfo,getNumViews}=require('../controllers/routes.controllers')

router.get('/projects',getProjects) 
router.get('/project/:name',getProjectDetails)
router.get('/info',getMyInfo)
router.get('/globalVules/numViews',getNumViews)

// router.get('/save-data',saveData)
// router.get('/save-myInfo',saveMyInfo)

module.exports=router   
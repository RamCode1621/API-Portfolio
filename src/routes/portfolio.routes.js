const {Router}=require('express')
const router=Router()
const {getProjects,getProjectDetails,getMyInfo,saveData,saveMyInfo}=require('../controllers/routes.controllers')

// const ModelProject=require('../models/Project')
// const ModelMyInfo=require('../models/MyInfo')

router.get('/projects',getProjects) 
router.get('/project/:name',getProjectDetails)
router.get('/info',getMyInfo)

// router.get('/save-data',saveData)
// router.get('/save-myInfo',saveMyInfo)

module.exports=router   
const Functions=[]  
const ModelProject=require('../models/Project')
const ModelMyInfo=require('../models/MyInfo')
const myInfo=require('../../public/aboutMe')

Functions.getProjects=(req,res)=>{
    ModelProject.find()
    .then(data=>res.json(data))
    .catch(error=>res.json({
        database:'Not find' 
    }))
    res.send('dfthbrthy')
}

Functions.getProjectDetails=(req,res)=>{
    const nameRes=req.params.name
    ModelProject.findOne({name:nameRes})
    .then(data=>res.json(data))
    .catch(error=>res.json({ 
        database:'Not find'
    }))
}
Functions.getMyInfo=(req,res)=>{
    ModelMyInfo.find()
    .then(data=>res.json(data))
    .catch(error=>console.error(error))
}
// Functions.saveData=(req,res)=>{
//     projects.forEach(item=>{
//         let doc=new ModelProject(item)
//         doc.save()
//             .then(doc => {
//                 console.log('project saved!!')
//             })
//             .catch(err => {
//                 console.error(err)
//             })
//     })
//     res.status(200)
// }
// Functions.saveMyInfo=(req,res)=>{
//     let doc=new ModelMyInfo(myInfo)
//     doc.save()
//     .then(doc => {
//         console.log('My info save!')
//     })
//     .catch(err => {
//         console.error(err)
//     })
// }
module.exports=Functions
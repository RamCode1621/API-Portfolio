const projects=require('../../public/projects')
const aboutMe=require('../../public/aboutMe')
const Functions={}

const ModelProject=require('../models/Project')
const ModelMyInfo=require('../models/MyInfo')

Functions.getProjects=async(req,res)=>{
    try{
        const requestData=await ModelProject.find()
        await res.json(requestData)
    }catch(err){
        console.log(`Peticion no concretada:\n${err}`)
    }
    
    // .then(data=>res.json(data))
    // .catch(error=>res.json(error))
}
 
Functions.getProjectDetails=(req,res)=>{
    const nameRes=req.params.name
    ModelProject.findOne({name:nameRes})
    .then(data=>res.json(data))
    .catch(error=>res.json(error)) 
}

Functions.getMyInfo=(req,res)=>{
    ModelMyInfo.find()
    .then(data=>res.json(data))
    .catch(error=>res.json(error)) 
}

Functions.saveData=(req,res)=>{
    projects.forEach(item=>{
        let doc=new ModelProject(item)
        doc.save()
            .then(doc => {
                console.log('project saved!!')
            })
            .catch(err => {
                console.error(err)
            })
    })
    res.status(200)
}

Functions.saveMyInfo=(req,res)=>{
    let doc=new ModelMyInfo(aboutMe)
    doc.save()
    .then(doc => {
        console.log('My info save!')
    })
    .catch(err => {
        console.error(err)
    })
}


module.exports=Functions
// const projects=require('../../public/projects')
// const aboutMe=require('../../public/aboutMe')
const Functions={}

const Project=require('../models/Project')
const MyInfo=require('../models/MyInfo')
const Counter=require('../models/Counter')

Functions.getProjects=(req,res)=>{
    try{
        Project.find()
        .then(data=>res.json(data))
        .catch(error=>res.json(error))
        // res.json({
        //     author:'Richard'
        // })
    }catch(error){
        res.write(`Error 505:\n${error}`)
    }
}
 
Functions.getProjectDetails=(req,res)=>{
    const nameRes=req.params.name
    try {
        Project.findOne({name:nameRes})
        .then(data=>res.json(data))
        .catch(error=>res.json(error)) 
    } catch (error) {
        res.write(`Error 505:\n${error}`)
    }
}

Functions.getMyInfo=(req,res)=>{
    try {
        MyInfo.find()
        .then(data=>res.json(data))
        .catch(error=>res.json(error)) 
    } catch (error) {
        res.write(`Error 505:\n${error}`)
    }
}

Functions.getNumViews=(req,res)=>{
    const idViews='61d3de38d1ff7cd92b1fc482'
    try{
        Counter.find({_id:idViews})
        .then(data=>{
            let objectViews=data[0]
            objectViews.views+=1
            return objectViews
        })
        .then(objectViews=>{
           Counter.updateOne({_id:idViews},objectViews)
           .then(console.log(objectViews))
           
        })
        .catch(error=>res.json(error)) 
    }catch(error){
        res.write(`Error 505:\n${error}`)
    }
}

Functions.saveData=(req,res)=>{
    projects.forEach(item=>{
        let doc=new Project(item)
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

// Functions.saveMyInfo=(req,res)=>{
//     let doc=new MyInfo(aboutMe)
//     doc.save()
//     .then(doc => {
//         console.log('My info save!')
//     })
//     .catch(err => {
//         console.error(err)
//     })
// }


module.exports=Functions
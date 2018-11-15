const peopleController = {};
const People = require('../models/peoples-model');

peopleController.getPeoples = (req,res)=>{
    People.find((err, peoples)=>{
        if(err){res.json(err)}
        res.json(peoples);
    })
}

peopleController.addPeople = (req,res)=>{
    let newPeople = new People({
        nombre : req.body.nombre,
        apellido: req.body.apellido
    })
    newPeople.save((err,people)=>{
        if(err){
            let response = {
                message: `Hubo un error al crear el nuevo usuario`,
                type:'danger'
            }
            res.status(500).json(response);
        }
        let response = {
            message: `Se creo correctamente la persona`,
            type:'success'
        }
        res.status(201).json(response);
    })
}

peopleController.updatePeople = (req,res)=>{
    let editPeople = new People({
        _id: req.params.id,
        nombre : req.body.nombre,
        apellido: req.body.apellido
    })
    People.findOneAndUpdate({_id:req.params.id}, {$set: editPeople},(err,pople)=>{
        if(err){
            let response = {
                message: `Hubo un error al editar el usuario ${err}`,
                type:'danger'
            }
            res.status(500).json(response);
        }else{
            let response = {
                message: `Se creo edito correctamente la persona`,
                type:'success'
            }
            res.status(201).json(response);
        }
    })
}

peopleController.deletePeople = (req,res)=>{
    People.findOneAndDelete({_id:req.params.id},(err,people)=>{
        if(err){
            let response = {
                message: `Hubo un error al eliminar el usuario ${err}`,
                type:'danger'
            }
            res.status(500).json(response);
        }else{
            let response = {
                message: `Se creo eliminó correctamente la persona`,
                type:'success'
            }
            res.status(201).json(response);
        }
    })
}
module.exports = peopleController;
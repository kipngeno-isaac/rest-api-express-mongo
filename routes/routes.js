const express = require('express');
const Model = require('../model/model');
const router = express.Router()

router.post('/post', async (req, res) =>{
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error){
        res.status(400).json({message: error.message})
    }

})

router.get('/getAll', async (req, res)=>{
try {
    const data = await Model.find();
    res.json(data)
}
catch (error){
    res.status(500).json({message: error.message})
}
})

router.get('/getOne/:id', async (req, res)=>{
try {
    const data = await Model.findById(req.params.id);
    res.json(data)
}
catch (error){
    res.status(500).json({message: error.message})
}
})

router.patch('/update/:id', async (req, res)=>{
try {
    const id = req.params.id;
    const updateData = req.body;
    const options = {new: true};

    const result = await Model.findByIdAndUpdate(id, updateData, options)

    res.send(result)
}
catch (error){
    res.status(400).json({message: error.message})
}
})

router.delete('/delete/:id', (req, res) =>{
    res.send('Delete by ID API')
})
module.exports = router;
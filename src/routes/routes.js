const express = require('express');
const router = express.Router()
const Controller = require('../controller/controller')

router.post('/post', Controller.postData)

router.get('/getAll', Controller.getAllData)

router.get('/getOne/:id', Controller.getDataById)

router.patch('/update/:id', Controller.updateData)

router.delete('/delete/:id', Controller.deleteData)

module.exports = router;

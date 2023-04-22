const express = require('express');
const router = express.Router();
const {singUpValidation,singInValidation} = require('../validation/validate')
const {singUp,singIn,userUpdate,getProfile,details} = require('../controller/user')
const {requireSigin} = require('../middleware/middleware');
//const { pagination } = require('../shared/pagination');
const {createCourse,detailCourse}= require('../controller/course')

 
router.post('/createCourse',createCourse)

router.post('/singIn',singInValidation,singIn)

router.put('/:_id',requireSigin,singUpValidation,userUpdate)

router.get('/getprofile',requireSigin,getProfile)

router.post('/list',details )

module.exports= router
const express = require('express');
const router = express.Router();
const {singUpValidation,singInValidation} = require('../validation/validate')
const {singUp,singIn,userUpdate} = require('../controller/user')
const {requireSigin} = require('../middleware/middleware')

 
router.post('/singup',singUpValidation,singUp)

router.post('/singin',singInValidation,singIn)

router.put('/:_id',requireSigin,singUpValidation,userUpdate)

module.exports= router
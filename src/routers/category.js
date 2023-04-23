const express = require('express');
const router = express.Router();
const {singUpValidation,singInValidation,CreatCategory} = require('../validation/validate')
const {singUp,singIn,userUpdate,getProfile,details} = require('../controller/user')
const {requireSigin} = require('../middleware/middleware');
//const { pagination } = require('../shared/pagination');
const {createCategory,categoryList}= require('../controller/categories')

 
router.post('/list',requireSigin,CreatCategory,categoryList)
router.post('/create',createCategory)




module.exports= router
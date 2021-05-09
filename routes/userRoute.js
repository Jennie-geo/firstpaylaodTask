const express = require('express')
const path = require('path');
const { 
    getDetails, 
    createDetails, 
    singleUserDetails,
    updateUserDetails,
    deleteUserDetails
     } = require('../controllers/userProfile.js')
const router = express.Router()

router.get('/', getDetails);

router.post('/', createDetails);

router.get('/:userId', singleUserDetails);

router.patch('/:userId', updateUserDetails);

router.delete('/:userId', deleteUserDetails);

module.exports = router;
const  Person  = require('../models/person')
const router = require('../routes/userRoute')
const mongoose = require('mongoose')

const getDetails = (req, res) => {
  Person.find().then(result => {
      if(result.length > 0) {
          return res.status(200).json({ success: true, data: result }) 
      }
     res.status(200).json({ success: true, data: "No person exists in the database" }) 
           
}).catch(err => {
    res.status(500).json({success: false, msg: err })
})
};

const createDetails = (req, res) => {
     
   const person = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    country: req.body.country
})
 person.save()
 .then(data => {
     console.log('Data created')
     return res.status(201).json({ success: true, person: {
         details: data
     }})
     
 })
  .catch(err => {
    console.log(err)
    res.status(400).json({ success: false, msg: err})
  })
  
 };
const singleUserDetails = (req, res) =>{
      const id = req.params.userId;
     Person.findById(id).then(doc => {
         if(doc) {
        return res.status(200).json({ success: true, data: doc}) 
         } 
         res.status(200).json({ success: true, msg: `No person with ${id} found`})
     }).catch(err => {
         res.status(400).json({ success: false, error: err.message})
     })
 };

const updateUserDetails = (req, res) => {
   
    const id = req.params.userId;
     const name = req.body.name;
    const email = req.body.email;
    const country = req.body.country


    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Person.update({ _id: id}, { $set: updateOps }).exec().then(result => {
        console.log(result)
        res.status(200).json({ success: true, data: result})
    }).catch(err => {
        res.status(500).json({ success:flase, msg: err})
    })
}

const deleteUserDetails = (req, res) => {
const id = req.params.userId
Person.deleteOne({_id: id}).then(() => {
    return res.status(200).json({ success: true, data: `The user with id ${id} deleted`})
}).catch(err => {
    res.status(400).json({ success: false, msg: err.message})
})
}
module.exports =  { 
    getDetails, 
    createDetails, 
    singleUserDetails, 
    updateUserDetails,
    deleteUserDetails
    }
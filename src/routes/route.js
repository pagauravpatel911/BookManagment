const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')




router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post('/register', userController.createUser)





router.get('*', function(req, res){
    res.status(404).send({status:false, ERROR:"page not found"});
  });



module.exports = router;
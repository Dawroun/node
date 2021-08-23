const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.get("/register", (req,res) => {
    const user = new User({
        username: "jet",
        email: "jet@gmail.com",
        password: "1223334444" 
    })

    user.save()
    .then(()=>res.json('user added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
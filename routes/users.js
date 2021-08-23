const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send("hey it is user route")
})

module.exports = router
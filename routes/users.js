const router = require("express").Router();

router.get("/", (req,res) => {
    res.send("it's user route")
})
module.exports = router;
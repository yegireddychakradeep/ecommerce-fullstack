const userCtrl = require("../controllers/userCtrls");

const router = require("express").Router()

router.post("/", userCtrl.register)

module.exports = router;
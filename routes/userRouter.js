const router = require("express").Router();
const userCtrl = require("../controllers/userController");
const auth = require("../middleware/authen");

router.post("/register", userCtrl.register);

//new
router.post("/activation", userCtrl.activation);

router.post("/login", userCtrl.login);

router.get("/logout", userCtrl.logout);

router.get("/refresh_token", userCtrl.refreshToken);

router.get("/infor", auth, userCtrl.getUser);

module.exports = router;

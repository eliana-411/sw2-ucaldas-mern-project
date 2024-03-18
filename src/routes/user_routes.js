const userController = require("../controllers/user_controller")
const express = require("express")
const router = express.Router();

// http://localhost:3000/api/v1/users/new-user
router.post("/new-user", userController.createUser);
// http://localhost:3000/api/v1/users/
router.get("/", userController.listUser);
// http://localhost:3000/api/v1/users/:id
router.get("/:id", userController.getUser);
// http://localhost:3000/api/v1/users/edit/:id
router.patch("/edit/:id", userController.editUser);
// http://localhost:3000/api/v1/users/delete/:id
router.delete("/delete/:id", userController.deleteUser);


module.exports = router 
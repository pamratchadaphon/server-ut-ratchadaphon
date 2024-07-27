const userController = require("../controllers/userController");
const router = require("express").Router();

router.post("/", userController.register);
router.post("/login", userController.login);
router.post('/authen', userController.authen)
router.get("/", userController.index);
router.put("/:user_id", userController.update);
router.delete("/:user_id", userController.delete);
router.get("/:user_id", userController.show);
router.get(
  "/riceCaltivation_incomeExpense/:user_id",
  userController.riceCaltivation_incomeExpense
);

module.exports = router;
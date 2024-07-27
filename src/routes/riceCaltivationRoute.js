const riceCaltivation = require("../controllers/riceCaltivationController");
const router = require("express").Router();

router.post("/", riceCaltivation.create);
router.get("/", riceCaltivation.index);
router.get("/:riceCaltivation_id", riceCaltivation.show);
router.put("/:riceCaltivation_id", riceCaltivation.update);
router.delete("/:riceCaltivation_id", riceCaltivation.delete);
router.get("/incomeExpense/:riceCaltivation_id", riceCaltivation.incomeExpense);
router.get('/user', riceCaltivation.User)

module.exports = router;